// metro.config.js

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// custom configuration (if any)
const customConfig = {
  //custom Metro configuration options (e.g., asset handling, transformer settings)
};

// Merge the default config with your custom config
const finalConfig = mergeConfig(defaultConfig, customConfig);


module.exports = finalConfig;
