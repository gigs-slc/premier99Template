module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json', '.svg', '.png', '.tsx', '.ts'],
        // Note: you do not need to provide aliases for same-name paths immediately under /src/
        alias: {
          src: './src/',
          shared: './src/shared/',
        },
      },
    ],
  ],
};
