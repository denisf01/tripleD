import { StyleSheet, Text, View } from "react-native";
import { FlatList, Button, HStack, VStack } from "native-base";
import AppBar from "../components/AppBar";
import { FormControl } from "native-base";
import { Center } from "native-base";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import Context from "../context";

function BuildingAFormExample(props) {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const ctx = useContext(Context);
  const validate = () => {
    if (formData.title === undefined) {
      setErrors({ ...errors, title: "Title is required" });
      return false;
    } else if (formData.title.length <= 0) {
      setErrors({ ...errors, title: "Title is too short" });
      return false;
    }
    if (formData.category === undefined) {
      setErrors({ ...errors, category: "Category is required" });
      return false;
    } else if (formData.category.length <= 0) {
      setErrors({ ...errors, title: "Category is too short" });
      return false;
    }
    if (formData.description === undefined) {
      setErrors({ ...errors, description: "Description is required" });
      return false;
    } else if (formData.description.length <= 0) {
      setErrors({ ...errors, title: "Description is too short" });
      return false;
    }
    if (formData.price === undefined) {
      setErrors({ ...errors, price: "Price is required" });
      return false;
    } else if (formData.price.length <= 0) {
      setErrors({ ...errors, price: "Price is too short" });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      if (props.props.route.params.input) ctx.addItem(formData);
      else {
        ctx.editItem(formData, props.props.route.params.itemId);
      }
      props.props.navigation.navigate("main");
    } else {
      console.log("test");
    }
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl
        isRequired
        isInvalid={"title" || "category" || "description" || "price" in errors}
      >
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Title
        </FormControl.Label>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...formData, title: value })}
        />
        {"title" in errors ? (
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText></FormControl.HelperText>
        )}
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Category
        </FormControl.Label>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...formData, category: value })}
        />
        {"category" in errors ? (
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText></FormControl.HelperText>
        )}
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Description
        </FormControl.Label>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...formData, description: value })}
        />
        {"description" in errors ? (
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText></FormControl.HelperText>
        )}
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Price
        </FormControl.Label>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          onChangeText={(value) => setData({ ...formData, price: value })}
        />
        {"price" in errors ? (
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText></FormControl.HelperText>
        )}
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
}

export default function InputItem(props) {
  return (
    <Center flex={1}>
      <BuildingAFormExample props={props} />
    </Center>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    height: 30,
  },
});
