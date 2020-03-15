const path = require('path');
module.exports = {
    entry: './src/Components/app.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"]
         }
        }
      ],
    },
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, './'), 
      }
    },
    output:{
        filename: 'main.js',
       path: __dirname + '/static/dist'
    }
  };