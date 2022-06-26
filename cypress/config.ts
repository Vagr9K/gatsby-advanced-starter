import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    baseUrl: "http://localhost:9000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
