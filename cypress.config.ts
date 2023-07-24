import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/",
    chromeWebSecurity : false,
    watchForFileChanges : false,
    experimentalSourceRewriting: false,
    defaultCommandTimeout: 50000
  },
});
