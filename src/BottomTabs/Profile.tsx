import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { ReactNode, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

interface PropertiesProps {
  title: string;
  description: string;
}

function PropertyItem({ title, description }: PropertiesProps) {
  return (
    <View style={styles.compDetailsView}>
      <Text style={[styles.title, { fontSize: 12 }]}>{title}</Text>
      <Text style={styles.address}>{description}</Text>
    </View>
  );
}

interface CardProps {
  title: string;
  children: ReactNode;
}

function CardContainer({ title, children }: CardProps) {
  return (
    <View style={styles.detailsCard}>
      <Feather name="edit" size={24} color="black" style={styles.icon} />
      <Text style={[styles.title, { fontSize: 14 }]}>{title}</Text>
      {children}
    </View>
  );
}

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
          <View style={styles.detailsCard}>
            <Text style={[styles.title, { fontSize: 14 }]}>
              Company Details
            </Text>
            <View style={styles.card}>
              <View style={styles.avatarView}>
                <Avatar.Image style={styles.avatar} size={90} source={{}} />
                <Feather
                  name="edit"
                  size={24}
                  color="black"
                  style={styles.avatarIcon}
                />
              </View>
              <View style={styles.propertyContainer}>
                <PropertyItem
                  title="Operator ID:"
                  description="7364873264783"
                />
                <PropertyItem
                  title="Company Number:"
                  description="7439286742396423"
                />
                <PropertyItem
                  title="Legal Name:"
                  description="Kamiklom bilmem ne"
                />
                <PropertyItem
                  title="TAT Number: "
                  description="23/64237894623"
                />
                <PropertyItem
                  title="VAT Number: "
                  description="43278347324948"
                />
                <PropertyItem
                  title="Address: "
                  description="lanfdjanfadnfdjan fdnjdlhnfljsdn fldsnfdnsfjns n fdsnj nfkjsdb fndslnfdsjnfjkds n djlsknfldsnf"
                />
              </View>
            </View>
          </View>
          <CardContainer title="Bank Details">
            <PropertyItem title="Account Type: " description="Bireysel" />
            <PropertyItem title="Bank Name: " description="Kasikorn Bankası" />
            <PropertyItem title="Account Name: " description="Eda Çolak " />
            <PropertyItem title="Account Number: " description="5678743023" />
          </CardContainer>

          <CardContainer title="Contact Details">
            <PropertyItem
              title="Company Owner Name: "
              description="Eda Çolak"
            />
            <PropertyItem title="Phone Number: " description="+8364876247" />
            <PropertyItem
              title="Office Phone Number: "
              description="+8364876247 "
            />
            <PropertyItem
              title="Office Phone Number: "
              description="+8364876247 "
            />
          </CardContainer>

          <CardContainer title="Settings">
            <PropertyItem title="Change Password " description="^^^^^^^^^^^^" />
            <PropertyItem
              title="Change Mail: "
              description="edaacol^^^^^@gmail.com"
            />
          </CardContainer>
          <Button
            style={styles.logOutButton}
            textColor="white"
            icon={() => {
              return <Entypo name="log-out" size={18} color="white" />;
            }}
          >
            Log Out
          </Button>
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
  detailsCard: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 14,
    elevation: 8,
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
  },
  propertyContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  compDetailsView: {
    flexDirection: "row",
    gap: 6,
  },
  address: {
    width: "60%",
    fontSize: 13,
  },
  logOutButton: {
    backgroundColor: "#f18f1a",
    borderRadius: 8,
    width: "30%",
    alignSelf: "flex-end",
    marginTop: 14,
    justifyContent: "space-between",
    marginRight: 5,
  },
  avatarView: {
    width: 90,
    height: 90,
    marginTop: 40,
  },
  avatar: {
    padding: 0,
    margin: 0,
    backgroundColor: "#f2f2f2",
  },
  avatarIcon: { position: "absolute", bottom: 0, right: 0 },
  icon: { position: "absolute", top: 10, right: 10 },
});
