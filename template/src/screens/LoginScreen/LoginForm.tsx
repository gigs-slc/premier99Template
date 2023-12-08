import type {Theme} from 'types';
import type {Actions} from 'screens';
import type {TUserRoleValue} from 'shared';

import React, {useCallback, useState} from 'react';
import memoizeOne from 'memoize-one';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useTheme, ShadowButton, UserRole} from 'shared';
import RadioRegisterButton from './RadioRegisterButton';

interface LoginFormProps {
  isRegisterForm?: boolean;
  onSubmit: (
    action: Actions,
    email: string,
    password: string,
    type?: TUserRoleValue,
  ) => void;
  onSwitch: () => void;
  onPress: (type: TUserRoleValue) => void;
  type: TUserRoleValue;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isRegisterForm,
  onSubmit,
  onSwitch,
  onPress,
  type,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {theme} = useTheme();
  const styles = Styles(theme);

  const handleSubmit = useCallback(() => {
    const authAction = isRegisterForm ? 'register' : 'login';
    onSubmit(authAction, email, password, type);
  }, [email, password, type, isRegisterForm, onSubmit]);

  return (
    <View style={styles.formContainer}>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry
          autoCapitalize="none"
        />
        {isRegisterForm && (
          <View style={styles.radioContainer}>
            <RadioRegisterButton
              data={UserRole.client}
              label={'Client'}
              onPress={onPress}
              isSelected={type === UserRole.client}
            />
            <RadioRegisterButton
              data={UserRole.trainer}
              label={'Trainer'}
              onPress={onPress}
              isSelected={type === UserRole.trainer}
            />
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <ShadowButton
          disabled={email.length < 1 || password.length < 1}
          label={isRegisterForm ? 'Register' : 'Login'}
          onPress={handleSubmit}
        />
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>
            {isRegisterForm
              ? 'Have an account already?'
              : "Don't have an account?"}
          </Text>
          <Pressable onPress={onSwitch}>
            <Text style={styles.subText}>
              {isRegisterForm ? 'Login' : 'Register'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

const Styles = memoizeOne(({colors}: Theme) => {
  return StyleSheet.create({
    subTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
    subText: {
      fontSize: 16,
    },
    subTextButton: {
      fontSize: 22,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: 5,
      color: colors.onBackground,
      backgroundColor: colors.background,
    },
    formContainer: {
      flex: 1,
    },
    contentContainer: {
      flex: 2,
      gap: 26,
    },
    radioContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    footer: {
      flex: 1,
      gap: 16,
    },
  });
});
