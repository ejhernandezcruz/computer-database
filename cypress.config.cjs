const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
    },
    baseUrl: 'https://computer-database.gatling.io/',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },

});
