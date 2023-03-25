import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { items_url, users_url } from "./constants/constants";
import {
  calculateRemainingTime,
  retrieveStoredToken,
} from "./constants/functions";
import { myImages } from "./constants/constants";

let logoutTimer;

const Context = React.createContext({
  token: null,
  id: null,
  isLoggedIn: false,
  login: (token, id) => {},
  logout: () => {},
  isLoggedOut: false,
  user: [],
  items: [],
  cart: [],
  addToCart: (title, price) => {},
  deleteCartItem: (cartId) => {},
  deleteProfileItem: (itemId) => {},
  addItem: (data) => {},
  editItem: (data, itemId) => {},
});

export const ContextProvider = (props) => {
  const [user, setUser] = useState({
    userName: null,
    cart: [],
  });
  const [items, setItems] = useState(null);

  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = useCallback(() => {
    setId(null);
    setToken(null);
    setIsLoggedIn(false);
  }, []);
  const loginHandler = (token, id) => {
    setToken(token);
    setIsLoggedIn(true);
    console.log("test2");
    setId(id);
  };
  const deleteCartItemHandler = (cartId) => {
    setUser((prevState) => {
      let newState = {
        ...prevState,
        cart: prevState.cart.filter((item) => {
          return item.id !== cartId;
        }),
      };
      return { ...newState };
    });
    axios.delete(users_url + `${id}/cart/${cartId}.json`);
  };

  const deleteProfileItem = (itemId) => {
    setItems((prevState) => {
      let newState = prevState.filter((item) => {
        return item.id !== itemId;
      });
      return [...newState];
    });
    axios.delete(
      `https://tripled-e3a40-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`
    );
  };

  const addToCartHandler = (title, price) => {
    setUser((prevState) => {
      let newState = { ...prevState };
      const idCart = (Math.random() + 1).toString(36).substring(7);
      newState.cart = [
        ...newState.cart,
        { id: idCart, title: title, price: +price },
      ];
      axios
        .put(users_url + `${id}/cart/${idCart}.json`, {
          title: title,
          price: +price,
        })
        .then()
        .catch();
      return { ...newState };
    });
  };

  const addItemHandler = (data) => {
    const itemId = (Math.random() + 1).toString(36).substring(7);
    const photo = myImages[Math.floor(Math.random() * myImages.length)];
    axios
      .put(
        "https://tripled-e3a40-default-rtdb.europe-west1.firebasedatabase.app/items/" +
          itemId +
          ".json",
        {
          category: data.category,
          description: data.description,
          photo: [photo],
          price: data.price,
          title: data.title,
          user: user.userName,
          userId: id,
        }
      )
      .then()
      .catch();
    setItems((prevState) => {
      return [
        ...prevState,
        {
          id: itemId,
          category: data.category,
          description: data.description,
          photo: [photo],
          price: data.price,
          title: data.title,
          user: user.userName,
          userId: id,
        },
      ];
    });
  };

  const editItemHandler = (data, itemId) => {
    setItems((prevState) => {
      let oldItem = {
        ...prevState[
          prevState.findIndex((item) => {
            return item.id === itemId;
          })
        ],
      };
      let newItem = {
        ...oldItem,
        category: data.category,
        description: data.description,
        price: data.price,
        title: data.title,
      };
      axios.delete(
        `https://tripled-e3a40-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`
      );
      axios
        .put(
          "https://tripled-e3a40-default-rtdb.europe-west1.firebasedatabase.app/items/" +
            itemId +
            ".json",
          {
            category: data.category,
            description: data.description,
            photo: oldItem.photo,
            price: data.price,
            title: data.title,
            user: oldItem.user,
            userId: oldItem.id,
          }
        )
        .then()
        .catch();

      return [
        ...items.filter((item) => {
          return item.id !== itemId;
        }),
        newItem,
      ];
    });
  };

  useEffect(() => {
    if (!!isLoggedIn) {
      axios
        .get(users_url + id + ".json")
        .then(function (response) {
          // handle success
          if (!!response.data) {
            setUser({
              userName: response.data.userName,
              cart: response.data.cart ? response.data.cart : [],
            });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      axios
        .get(users_url + id + "/cart.json")
        .then(function (response) {
          // handle success
          if (!!response.data) {
            const initialCart = Object.keys(response.data).map((id) => {
              return {
                id,
                title: response.data[id].title,
                price: +response.data[id].price,
              };
            });

            setUser((prevState) => {
              let newState = { ...prevState };
              newState.cart = [...initialCart];

              return { ...newState };
            });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    axios
      .get(items_url)
      .then(function (response) {
        // handle success
        if (!!response.data) {
          const initialItems = Object.keys(response.data).map((id) => {
            return {
              id,
              category: response.data[id].category,
              description: response.data[id].description,
              photo: response.data[id].photo,
              price: response.data[id].price,
              title: response.data[id].title,
              user: response.data[id].user,
              userId: response.data[id].userId,
            };
          });

          setItems(initialItems);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id, isLoggedIn]);

  const contextValue = {
    token,
    id,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    user,
    items,
    addToCart: addToCartHandler,
    deleteCartItem: deleteCartItemHandler,
    deleteProfileItem: deleteProfileItem,
    addItem: addItemHandler,
    editItem: editItemHandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Context;
