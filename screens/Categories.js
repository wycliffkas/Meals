import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton"
import {HeaderButtons, Item} from "react-navigation-header-buttons"

const Categories = (props) => {
 
  props.navigation.setOptions({
    headerTitle: 'Meals Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {props.navigation.openDrawer()}}/>
      </HeaderButtons>
    )
  })

  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };



  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
