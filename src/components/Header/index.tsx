/* eslint-disable prettier/prettier */
import React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

type Props = {
  leftIcon: any;
  centerText: string;
};

function Header({ leftIcon, centerText }: Props) {
  return (
    <View style={styles.container}>
      <Appbar
        testID="appbar"
        style={styles.headerContainer}>
        <View style={styles.leftIcon}>{leftIcon}</View>
        <View style={styles.headerMiddleContainerwithMenu}>
          <Text numberOfLines={1} style={styles.middleText}>
            {centerText}
          </Text>
        </View>
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 6,
  },
  leftIcon: {
    width: '40%',
  },
  header: {
    marginTop: 40,
    width: '60%',
    borderRadius: 30,
    alignItems: 'stretch',
  },
  headerLeftContainer: {
    width: '20%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headerMiddleContainer: {
    width: '45%',
    height: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerMiddleContainerwithMenu: {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerRightContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRightContainerIcon: {
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  middleText: {
    fontSize: 24,
    fontWeight: '700',
    width: '100%',
  },
  rightText: {
    fontSize: 14,
    fontWeight: '700',
  },
  passesLabel: {
    paddingVertical: 5,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
  },
  headerContainer: {
    backgroundColor: 'white',
    shadowColor: 'black',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 3 : 16,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.5,
    shadowRadius: Platform.OS === 'ios' ? 2.4 : 16.0,
    elevation: Platform.OS === 'ios' ? 3 : 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
    display: 'flex',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        paddingTop: 25,
        height:
          height === 812 || width === 812 || height === 896 || width === 896
            ? 100
            : 80,
      },
      android: {
        height: 70,
      },
    }),
  },
});

export default Header;
