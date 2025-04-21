import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Profile() {
  const [topTab, setTopTab] = useState<string>("Profile");

  let profile: string = topTab == "Profile" ? "#f18f1a" : "black";
  let users: string = topTab == "Users" ? "#f18f1a" : "black";
  let products: string = topTab == "Products" ? "#f18f1a" : "black";
  let seller: string = topTab == "Seller" ? "#f18f1a" : "black";

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={[styles.topButtons, { borderBottomColor: profile }]}
          onPress={() => setTopTab("Profile")}
        >
          <Ionicons name="person" size={20} color={profile} />
          <Text style={[styles.topText, { color: profile }]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topButtons, { borderBottomColor: users }]}
          onPress={() => setTopTab("Users")}
        >
          <Feather name="users" size={20} color={users} />
          <Text style={[styles.topText, { color: users }]}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topButtons, { borderBottomColor: products }]}
          onPress={() => setTopTab("Products")}
        >
          <MaterialCommunityIcons
            name="package-variant-closed"
            size={20}
            color={products}
          />
          <Text style={[styles.topText, { color: products }]}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.topButtons, { borderBottomColor: seller }]}
          onPress={() => setTopTab("Seller")}
        >
          <Ionicons name="person" size={18} color={seller} />
          <Text style={[styles.topText, { color: seller }]}>Seller</Text>
        </TouchableOpacity>
      </View>

      {topTab == "Profile" ? (
        <View>
          <View style={styles.companyDetailsCard}>
            <Text style={styles.title}>Company Details</Text>
            <View style={styles.card}>
              <Avatar.Image
                size={100}
                source={require("../assets/image.png")}
              />
            </View>
          </View>
        </View>
      ) : topTab == "Users" ? (
        <View>
          <Text>Users</Text>
        </View>
      ) : topTab == "Products" ? (
        <View>
          <Text>Products</Text>
        </View>
      ) : topTab == "Seller" ? (
        <View>
          <Text>Seller</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 45,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  topText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "500",
  },
  companyDetailsCard: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    elevation: 8,
    marginTop: 20,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
  },
});
