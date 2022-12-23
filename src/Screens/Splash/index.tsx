/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationService from '../../navigation/NavigationService';

const Splash: React.FC = () => {

  React.useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('HomeScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.note}>Test App</Text>
    </View>
  );
};



export default Splash;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  note: {
    color: 'black',
    marginTop: 40,
    fontWeight: '600',
    fontSize: 18,
  },
});

