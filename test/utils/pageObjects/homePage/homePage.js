const logger = require('../../../config/logger.config.js');
const BasePage = require("../basePage/basePage");
const Collection = require("../baseElements/baseCollection");
const EC = protractor.ExpectedConditions;

class HomePage extends BasePage {
    constructor() {
      super();
      this.sections = new Collection("Sections", "CSS", ".Wall_cardWrapper__2qHB6)");
    };
    
    async waitForFirstNavigationButton() {
      logger.info(`Waiting for First Navigation Button`);
      const firstNavigationButton = this.Header.navigationButtons.collection.get(0);
      await browser.wait(EC.visibilityOf(firstNavigationButton), 30000);    
  }
};

module.exports = HomePage;