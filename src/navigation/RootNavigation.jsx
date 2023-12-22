import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationService';
import Navigation from './Navigation';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation />
    </NavigationContainer>
  );
};

export default RootNavigation;