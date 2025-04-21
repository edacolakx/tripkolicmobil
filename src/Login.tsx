import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, TextInput } from "react-native-paper";
import { RootStackParamList } from "./App";

// Navigation prop tipi
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.image} />
      <Text style={styles.logInText}>LOG IN</Text>
      <TextInput
        style={styles.textInput}
        placeholder={"User ID"}
        underlineColor="transparent"
        left={<TextInput.Icon icon="account" />}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder={"Password"}
        underlineColor="transparent"
        left={<TextInput.Icon icon="lock-outline" />}
      ></TextInput>

      <Text
        onPress={() => {
          console.log("object");
        }}
        style={styles.forgotPassText}
      >
        Forgot Password
      </Text>

      <Button
        style={styles.logInButton}
        labelStyle={styles.buttonLabel}
        onPress={() => navigation.navigate("Home")}
      >
        Log In
      </Button>
      <View style={styles.registerView}>
        <Text style={styles.registerText}>Register as</Text>
        <View style={styles.registerButtonsView}>
          <Button
            style={styles.registerButtons}
            labelStyle={styles.buttonLabel}
          >
            Operator
          </Button>
          <Button
            style={styles.registerButtons}
            labelStyle={styles.buttonLabel}
          >
            Seller
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "50%",
    height: "10%",
    marginVertical: "30%",
  },
  registerView: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    bottom: 0,
    borderRadius: 30,
    justifyContent: "space-around",
    height: "16%",
  },
  registerButtonsView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
  },
  registerButtons: {
    backgroundColor: "#4db5ce",
    borderRadius: 7,
    width: "40%",
  },
  registerText: {
    color: "#f08f1c",
    fontSize: 20,
    fontWeight: "400",
  },
  buttonLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  logInText: {
    color: "#f09220",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "white",
    width: "80%",
    elevation: 8,
    height: 45,
    borderRadius: 5,
    marginBottom: 15,
  },
  forgotPassText: {
    textDecorationLine: "underline",
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "flex-start",
    width: "80%",
  },
  logInButton: {
    backgroundColor: "#f08f1c",
    width: "75%",
    borderRadius: 5,
    marginTop: "10%",
  },
});
