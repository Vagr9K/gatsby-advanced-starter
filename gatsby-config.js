module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-ts-config",
      options: {
        configDir: "./gatsby",
        projectRoot: __dirname,
      },
    },
  ],
};
