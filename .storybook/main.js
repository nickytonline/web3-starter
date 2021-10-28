const path = require('path');
const modulesDir = path.join(__dirname, '../node_modules');

const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@emotion/core': path.join(modulesDir, '@emotion/react'),
      '@emotion/styled': path.join(modulesDir, '@emotion/styled'),
      '@emotion/styled-base': path.join(modulesDir, '@emotion/styled'),
      'emotion-theming': path.join(modulesDir, '@emotion/react'),
    },
  },
});

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../**/__stories__/*.stories.@(mdx|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // To get Theme UI working in Storybook. See https://github.com/system-ui/theme-ui/issues/1530#issuecomment-788945510
  managerWebpack: updateEmotionAliases,
  webpackFinal: updateEmotionAliases,
  babel: (config) => {
    const getEntryIndexByName = (type, name) => {
      return config[type].findIndex((entry) => {
        const entryName = Array.isArray(entry) ? entry[0] : entry;
        return entryName.includes(name);
      });
    };

    // Replace reference to v10 of the Babel plugin to v11.
    const emotionPluginIndex = getEntryIndexByName(
      'plugins',
      'babel-plugin-emotion',
    );
    config.plugins[emotionPluginIndex] = require.resolve(
      '@emotion/babel-plugin',
    );

    // Storybook's Babel config is already configured to use the new JSX runtime.
    // We just need to point it to Emotion's version.
    // https://emotion.sh/docs/css-prop#babel-preset
    const presetReactIndex = getEntryIndexByName(
      'presets',
      '@babel/preset-react',
    );
    // Pulling this from the @emotion/babel-preset package in project's .babelrc
    config.presets[presetReactIndex][1].importSource = 'theme-ui';

    return config;
  },
};
