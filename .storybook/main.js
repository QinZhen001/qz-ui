const path = require("path")


module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links'
  ],
  webpackFinal: async (config,{ configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.


    // 支持scss
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    // file-loader
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf)$/,
      loader: 'file-loader',
    })

    //设置别名
    config.resolve.alias = {
      'vue$': 'vue/dist/vue.esm.js',
    }

    // 打印最终的congig
    console.dir(config, { depth: null }) 

    return config;
  }
};
