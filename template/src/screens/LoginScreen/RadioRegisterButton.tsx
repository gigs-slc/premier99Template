import type {TUserRoleValue} from 'shared';

import React, {useCallback} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import memoizeOne from 'memoize-one';
import {useTheme} from 'shared';

interface RadioRegisterButtonProps {
  data: TUserRoleValue;
  disabled?: boolean;
  label: string;
  onPress: (data: TUserRoleValue) => void;
  isSelected: boolean;
}

function _RadioRegisterButton({
  data,
  disabled,
  label,
  onPress,
  isSelected,
}: RadioRegisterButtonProps) {
  const {theme} = useTheme();
  const styles = Styles(theme);
  const textStyles = isSelected ? styles.radioTextSelected : styles.radioText;
  const handlePress = useCallback(() => {
    onPress(data);
  }, [onPress, data]);
  return (
    <Pressable
      style={styles.radioButton}
      onPress={handlePress}
      disabled={disabled}>
      <Text style={textStyles}>{label}</Text>
    </Pressable>
  );
}

export default React.memo(_RadioRegisterButton);

const Styles = memoizeOne(({colors}) => {
  return StyleSheet.create({
    radioButton: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.primary,
      backgroundColor: 'transparent',
    },
    radioText: {
      color: colors.onBackground,
      fontSize: 16,
      textAlign: 'center',
    },
    radioTextSelected: {
      color: colors.onBackground,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
});
