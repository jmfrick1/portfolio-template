module.exports = {
  // Example configuration
  webpack: (config, { isServer }) => {
    // Fix missing semicolons and check for correct module names
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  // Ensure no unterminated template literals
  env: {
    CUSTOM_KEY: 'custom_value'
  }
};
