export interface ThemeColors {
  primary: string;
  background: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  tertiary: string;
  onTertiary: string;
  error: string;
  onError: string;
  surface: string;
  surfaceVariant: string;
  outline: string;
  disabled: string;
  onBackground: string;
}

export interface Theme {
  name: string;
  dark: boolean;
  roundness: number;
  version: number;
  colors: ThemeColors;
}
