const CracoLessPlugin = require('craco-less');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function ({ env }) {
  console.log('env', env)
  return {
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
            return webpackConfig;
          }
        }
      },
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: {
                "@card-head-color": "#1DA57A",
                "@link-color": "#1DA57A",
                "@card-head-background": "#1DA57A",
                "@border-radius-base": "2px",
              },
            },
          },
        },
      },
    ],
  };
};