import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import NewsScreen from './src/screens/NewsScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      <View _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} flex={1}>
        <NewsScreen />
      </View>
    </NativeBaseProvider>
  );
};
export default App;
