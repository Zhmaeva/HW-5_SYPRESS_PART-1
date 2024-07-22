const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 2,
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,
    // default viewport:
    viewportWidth: 1000,
    viewportHeight: 660,
    // video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
