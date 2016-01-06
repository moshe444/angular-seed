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
              loaders: ["style", "css", "sass"]
            }
        ]
    },
    postcss: function(){
      return [autoprefixer, precss];
    }
};
