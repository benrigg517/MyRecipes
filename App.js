/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider, Portal} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import {Root} from './src/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isMountedRef} from './src/Utils/navigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <PaperProvider>
            <Portal.Host>
              <Root />
            </Portal.Host>
          </PaperProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
