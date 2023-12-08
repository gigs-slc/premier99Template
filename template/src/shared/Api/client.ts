import {create} from 'apisauce';
import Config from 'react-native-config';

const apiClient = create({
  baseURL: Config.API_URL,
});

export default apiClient;
