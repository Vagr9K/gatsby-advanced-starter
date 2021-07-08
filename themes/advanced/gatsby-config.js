module.exports = (userConfig) => ({
  plugins: [
    {
      resolve: "gatsby-plugin-ts-config",
      options: {
        configDir: "./gatsby",
        projectRoot: __dirname,
        props: userConfig,
      },
    },
  ],
});
