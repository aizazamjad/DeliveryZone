import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppRoute from './src/navigations/navigator';
import {store, persistor} from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={styles.flexCenter}>
              <ActivityIndicator color={'#900C3F'} />
            </View>
          }
          persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
