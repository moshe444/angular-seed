var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname,
        filename: "./app/build/bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: "style-loader!css-loader!postcss-loader"
            },
            {
              test: /\.scss$/,
              loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    postcss: function(){
      return [autoprefixer, precss];
    }
};
