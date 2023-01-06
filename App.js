import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppRoute from './src/navigations/navigator';
import {store, persistor} from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </Provider>
    </>
  );
}
