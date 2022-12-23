/* eslint-disable prettier/prettier */
import * as React from 'react';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { Provider as NativeProvider } from 'react-native-paper';
import Nav from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NativeProvider>
        <Nav />
      </NativeProvider>
    </Provider>
  );
}
