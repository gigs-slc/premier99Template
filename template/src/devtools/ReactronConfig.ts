import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: require('../../package.json').name,
    onConnect: () => {
      // @ts-ignore
      Reactotron.clear();
    },
  })
  .useReactNative()
  .connect();
