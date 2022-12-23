/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationDrawer from '../components/Drawer';
import ManageCategories from '../Screens/ManageCategories';
import Home from '../Screens/Home';
import { navigationRef } from './NavigationService';
import Splash from '../Screens/Splash';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();



function Nav() {
  const categories = useSelector((state: RootState) => state.counter.categories);
  function MyDrawer() {

    return (
      <Drawer.Navigator
        drawerContent={props => <NavigationDrawer {...props} />}
        initialRouteName={'Home'}
        screenOptions={{ headerShown: false }}
      >
        {
          categories.map((item) => {
            return (
              <Drawer.Screen
                name={item.name}
                component={Home}
                initialParams={{ name: item }}
              />
            );
          })
        }
        <Drawer.Screen
          name="ManageCategories"
          component={ManageCategories}
        />
      </Drawer.Navigator>
    );
  }

  return (<NavigationContainer ref={navigationRef}>
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Splash" component={Splash} />
      <HomeStack.Screen name="HomeScreen" component={MyDrawer} />
    </HomeStack.Navigator>
  </NavigationContainer>);
}

export default Nav;
