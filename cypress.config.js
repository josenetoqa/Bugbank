const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://bugbank.netlify.app/',
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-terminal-report/src/installLogsPrinter')(on);
},

  },
  fixturesFolder: false,
  video:true,
});