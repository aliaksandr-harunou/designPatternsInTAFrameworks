const logger = require('../../../../test/config/logger.config.js');
const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");
const EC = protractor.ExpectedConditions;

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://heroes.epam.com/";
      this.sections = new Collection("Sections", ".Wall_cardWrapper__2qHB6)");
    };
    
    open() {
      return super.open(this.url);
    };

    async waitForFirstNavigationButton() {
      logger.info(`Waiting for First Navigation Button"`);
      const firstNavigationButton = this.Header.navigationButtons.collection.get(0);
      await browser.wait(EC.visibilityOf(firstNavigationButton), 30000);    
  }
};

module.exports = HomePage;