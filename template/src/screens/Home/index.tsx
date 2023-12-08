import React, {memo} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HomeStackProps} from 'types';
import {removeItem, StorageValue} from 'shared';
import {useRootStore} from '../../store';

interface HomeScreenProps extends HomeStackProps<'HomeScreen'> {}

// TODO: REMOVE ONCE LOGOUT BUTTON BULIT

const _HomeScreen = ({}: HomeScreenProps) => {
  const {clearUser} = useRootStore(state => {
    return {
      clearUser: state.clearUser,
    };
  });
  const removeEverything = () => {
    clearUser();
    removeItem(StorageValue.token);
    removeItem(StorageValue.refresh);
    removeItem(StorageValue.user);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      {/* Add more UI elements here as needed */}
      <Button title="This is Home Screen" onPress={removeEverything} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export const HomeScreen = memo(_HomeScreen);
