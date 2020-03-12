module.exports = {
    entry: './src/Components/app.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ],
    },
    output:{
        filename: 'main.js',
       path: __dirname + '/static/dist'
    }
  };