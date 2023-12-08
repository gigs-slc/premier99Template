import type {Theme} from 'types';

import React from 'react';
import {Pressable, Text, StyleSheet, Platform} from 'react-native';
import {useTheme} from '../Context';

type ShadowButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  label: string;
};

const _ShadowButton: React.FC<ShadowButtonProps> = ({
  onPress,
  label,
  disabled,
}) => {
  const {theme} = useTheme();
  const styles = Styles(theme);
  return (
    <Pressable disabled={disabled} style={styles.button} onPress={onPress}>
      <Text style={styles.whiteText}>{label}</Text>
    </Pressable>
  );
};

const Styles = (theme: Theme) => {
  return StyleSheet.create({
    button: {
      height: 44,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'transparent',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    whiteText: {
      color: 'white',
      fontSize: 16,
    },
  });
};

export const ShadowButton = React.memo(_ShadowButton);
