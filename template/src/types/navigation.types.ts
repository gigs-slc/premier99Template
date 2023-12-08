import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

// Main: Navigation State ================================
export type MainStackParamsList = {
  Home: NavigatorScreenParams<HomeStackParamsList>;
};

export type MainStackProps<T extends keyof MainStackParamsList> =
  StackScreenProps<BottomTabScreenProps<MainStackParamsList, T>>;

// Auth: Navigation State ==========================
export type AuthStackParamsList = {
  Login: undefined;
};

export type AuthStackProps<T extends keyof AuthStackParamsList> =
  StackScreenProps<AuthStackParamsList, T>;

// HomeStack: Navigation State
export type HomeStackParamsList = {
  HomeScreen: undefined;
};

export type HomeStackProps<T extends keyof HomeStackParamsList> =
  StackScreenProps<HomeStackParamsList, T>;

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamsList {}
  }
}
