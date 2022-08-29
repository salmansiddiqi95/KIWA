const path = require('path');

module.exports = {
  entry: './index.html',
  output: {
    filename: 'main.js'
},
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};