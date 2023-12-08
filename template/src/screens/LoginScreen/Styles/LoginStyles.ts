import type {Theme} from 'types';

import {StyleSheet, Dimensions} from 'react-native';
import memoizeOne from 'memoize-one';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const styles = memoizeOne(({colors}: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      gap: 20,
      paddingHorizontal: screenWidth * 0.1,
      paddingVertical: screenHeight * 0.08,
    },
    text: {
      fontSize: 28,
      color: colors.onBackground,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
});

export default styles;
