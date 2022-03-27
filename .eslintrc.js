module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier', 'plugin:import/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  ignorePatterns: ['**/node_modules/**/*'],
};
