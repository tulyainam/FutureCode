import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigation from './src/navigation/Navigation';
import Login from './src/pages/login/Login';

function App(): React.JSX.Element {
  const [login, setLogin] = useState(0);

  return (
    <View>
      {login == 0 ? (
        <View>
          <StatusBar hidden/>
          <Login/>
        </View>
      ) : (
        <SafeAreaView>
          <Navigation/>
        </SafeAreaView>
      )}
      
    </View>
  );
}

export default App;
