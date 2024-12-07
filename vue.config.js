const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/nom-du-repo/' // Remplacez 'nom-du-repo' par le nom de votre dépôt GitHub
});
