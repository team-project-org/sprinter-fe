const CracoLessPlugin = require('craco-less');

module.exports = function ({ env }) {
  console.log('env', env)
  return {
    plugins: [
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