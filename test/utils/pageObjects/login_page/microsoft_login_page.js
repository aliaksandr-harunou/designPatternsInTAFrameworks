const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const logger = require('../../../config/logger.config.js');
const EC = protractor.ExpectedConditions;

class MicrosoftLoginPage extends BasePage {
  constructor() {
    super();
    this.url = "https://login.microsoftonline.com/login.srf";
    this.yesButton = new Element("Yes", "#idSIButton9");
    this.noButton = new Element("No", "#idBtn_Back");
  };
  open() {
    return super.open(this.url);
  };
  async clickYes() {
    await browser.switchTo().defaultContent();  
    await browser.wait(EC.elementToBeClickable(this.yesButton.element), 20000);      
    return this.yesButton.click();
  };

  async clickNo() {
    await browser.switchTo().defaultContent();
    await browser.wait(EC.elementToBeClickable(this.noButton.element), 10000);
    return this.noButton.click();
  };
};

module.exports = MicrosoftLoginPage;