const path = require('path');

module.exports = {
   
  mode: 'development',
  entry: './dist/app.js',
  output: {
    filename: 'app.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
};
