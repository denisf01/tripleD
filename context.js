import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { items_url, users_url } from "./constants/constants";
import {
  calculateRemainingTime,
  retrieveStoredToken,
} from "./constants/functions";

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
});

export const ContextProvider = (props) => {
  const [user, setUser] = useState({
    userName: null,
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

  useEffect(() => {
    if (!!isLoggedIn) {


      axios
        .get(users_url + id + ".json")
        .then(function (response) {
          // handle success
          if (!!response.data) {
            setUser({
              userName: response.data.userName,
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
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Context;
