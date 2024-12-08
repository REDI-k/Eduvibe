const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js', // L'entrée de ton application Vue.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Le fichier généré dans 'dist'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', // Charge les fichiers Vue
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // Transpile le JavaScript
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Charge les fichiers CSS
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // Permet d'utiliser la version complète de Vue
    },
    extensions: ['.js', '.vue', '.json'],
  },
  plugins: [
    new VueLoaderPlugin(), // Nécessaire pour Vue 3
  ],
  devtool: 'source-map', // Génère des sourcemaps pour le débogage
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Dossier contenant les fichiers générés
    compress: true,
    port: 9000, // Port par défaut pour le serveur de développement
  },
};
