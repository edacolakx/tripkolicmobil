import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Login from "./Login";
import Profile from "./BottomTabs/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Bookings from "./BottomTabs/Bookings";
import Invoice from "./BottomTabs/Invoice";
import Messages from "./BottomTabs/Messages";
import Report from "./BottomTabs/Report";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type TabParamList = {
  Profile: undefined;
  Bookings: undefined;
  Invoice: undefined;
  Messages: undefined;
  Report: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f18f1a",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={Invoice}
        options={{
          tabBarLabel: "Invoice",
          tabBarIcon: ({ color, size }) => (
            <View style={{ transform: [{ rotate: "-90deg" }] }}>
              <FontAwesome5 name="file-invoice" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: "Report",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-box-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer initialState={{ routes: [{ name: "Login" }] }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
