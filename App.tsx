import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Navigation from './src/navigation/Navigation';
import Login from './src/pages/login/Login';

function App(): React.JSX.Element {
  const [login, setLogin] = useState(0);

  return (
    <SafeAreaView >
      <StatusBar/>
      {login == 0 ? (
        <Login/>
      ) : (
        <Navigation/>
      )}
      
    </SafeAreaView>
  );
}

export default App;
