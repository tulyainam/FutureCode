import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/redux/reducer';
import Login from './src/pages/login/Login';
import RootNavigation from './src/navigation/RootNavigation';

const store = createStore(reducers, {});

function App() {
  const [login, setLogin] = useState(1);
  return (
    <Provider store={store}>
      {login == 0 ? (
        <View>
          <StatusBar hidden/>
          <Login/>
        </View>
      ) : (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', flex:1}}>
          <RootNavigation/>
        </SafeAreaView>
      )}
      
    </Provider>
  );
}

export default App;
