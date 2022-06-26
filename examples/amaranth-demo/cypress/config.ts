import { defineConfig } from "cypress";
import pluginConfig from "./plugins/index";

export default defineConfig({
  fixturesFolder: false,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      pluginConfig(on);

      return config;
    },
    baseUrl: "http://localhost:9000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
