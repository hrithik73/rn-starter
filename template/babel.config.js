module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
