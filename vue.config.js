(async () => {
  const { defineConfig } = await import('@vue/cli-service');

  module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/Eduvibe/' // Remplacez 'Eduvibe' par le nom de votre dépôt GitHub
  });
})();
