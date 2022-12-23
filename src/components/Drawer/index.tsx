/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

export default function NavigationDrawer(props: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{}}>
          <DrawerItemList
            {...props}
            activeTintColor={'#ffffff'}
            activeBackgroundColor={'#ffffff'}
            itemStyle={styles.itemStyles}
            labelStyle={styles.itemStyles}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyles: {
    marginVertical: 2,
  },
  labelStyles: {
    color: 'black',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    fontWeight: '600',
    width: '100%',
  },
});
