import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStackNavigator from './HomeStackNavigator';
import {getItem, storage} from '../Helpers';
import {useRootStore} from '../../store';

export const navigationRef = createNavigationContainerRef();
export const Routes = () => {
  const {storeUser} = useRootStore(state => {
    return {
      storeUser: state.user,
    };
  });
  const [_, setUser] = useState(getItem('user'));
  useEffect(() => {
    const listener = storage.addOnValueChangedListener(changedKey => {
      if (changedKey === 'user') {
        const newValue = storage.getString(changedKey);
        console.log('user:', newValue);
        setUser(newValue);
      }
    });
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {storeUser ? <HomeStackNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
