import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Login from "./Login";
import Profile from "./Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Navigasyon için tip tanımlamaları
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type TabParamList = {
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4db5ce",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profil",
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
