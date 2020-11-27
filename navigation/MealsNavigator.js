import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Colors from "../constants/Colors";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import Favorites from "../screens/Favorites";
import Filters from "../screens/Filters";
import MealDetail from "../screens/MealDetail";

const Stack = createStackNavigator();

const Stack2 = createStackNavigator();

const FavStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

// const FiltersNavigator = createStackNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MealsFavs"
      drawerContentOptions={{
        activeTintColor: Colors.accent,
        labelStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Drawer.Screen name="Meals" component={MealsFavTabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMeals}
        options={{
          title: "Default",
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetail}
        options={{ title: "Default" }}
      />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack2.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        }
      }}
    >
      <Stack2.Screen name="Filters" component={Filters} />
    </Stack2.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <FavStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <FavStack.Screen name="Favorites" component={Favorites} />
      <FavStack.Screen name="MealDetail" component={MealDetail} />
    </FavStack.Navigator>
  );
};

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.accent}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Meals") {
            return <Ionicons name="ios-restaurant" size={size} color={color} />;
          } else if (route.name === "Favorites") {
            return <Ionicons name="ios-star" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
