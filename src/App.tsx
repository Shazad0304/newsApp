import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import NewsScreen from './screens/NewsScreen';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <View
          _dark={{bg: 'blueGray.900'}}
          _light={{bg: 'blueGray.50'}}
          flex={1}>
          <NewsScreen />
        </View>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
