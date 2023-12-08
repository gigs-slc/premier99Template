import type {AuthStackProps, IAuthedUser} from 'types';
import type {TUserRoleValue} from 'shared';
import React, {memo, useState, useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import jwtDecode from 'jwt-decode';

import {useTheme, AuthApi, UserRole, StorageValue, setItem} from 'shared';
import LoginForm from './LoginForm';
import Styles from './Styles/LoginStyles';
import {useRootStore} from '../../store';

export const actions = ['login', 'register'] as const;
export type Actions = (typeof actions)[number];

interface LoginScreenProps extends AuthStackProps<'Login'> {}

const _LoginScreen: React.FC<LoginScreenProps> = () => {
  const {setUser} = useRootStore(state => {
    return {
      setUser: state.setUser,
    };
  });
  const [showRegister, setShowRegister] = useState(false);
  const [userType, setUserType] = useState<TUserRoleValue>(UserRole.client);
  const {theme} = useTheme();
  const styles = Styles(theme);
  const loginMutation = AuthApi.useLoginMutation();
  const registerMutation = AuthApi.useRegisterMutation();

  const handleAuth = async (
    action: Actions = 'login',
    email: string,
    password: string,
    type?: TUserRoleValue,
  ) => {
    try {
      let response;

      if (action === 'login') {
        response = await loginMutation.mutateAsync({email, password});
      } else if (action === 'register' && type) {
        response = await registerMutation.mutateAsync({email, password, type});
      }

      const token = response?.data?.accessToken;
      const decoded: IAuthedUser = token
        ? jwtDecode(token)
        : ({} as IAuthedUser);

      setItem(StorageValue.token, token);
      setItem(StorageValue.refresh, response?.data?.refreshToken);
      setItem(StorageValue.user, {id: decoded.id, email: decoded.email});
      setUser({id: decoded.id, email: decoded.email});
    } catch (error: any) {
      Alert.alert('Error', error?.data?.message);
    }
  };

  const toggleForm = useCallback(() => {
    setShowRegister(!showRegister);
  }, [showRegister]);

  const handleTypeChange = useCallback((type: TUserRoleValue) => {
    setUserType(type);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Premier 99 Software Template</Text>
      <Text style={styles.text}>
        {showRegister ? 'Register your account' : 'Login to your account'}
      </Text>
      <LoginForm
        isRegisterForm={showRegister}
        onSubmit={handleAuth}
        onSwitch={toggleForm}
        onPress={handleTypeChange}
        type={userType}
      />
    </View>
  );
};

export const LoginScreen = memo(_LoginScreen);
