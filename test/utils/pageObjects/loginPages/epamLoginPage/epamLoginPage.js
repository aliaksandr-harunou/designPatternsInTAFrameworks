const BasePage = require("../../basePage/basePage");
const Element = require("../../baseElements/baseElement");
const creds = require('../../../constants/credentials');
const EC = protractor.ExpectedConditions;

class LoginPage extends BasePage {
  constructor() {
    super();
    this.loginField = new Element("Login field", "ID", "userNameInput");
    this.passwordField = new Element("Password field", "ID", "passwordInput");
    this.signInButton = new Element("Sign In button", "XPATH", "//*[@id='submitButton']");
    this.iFrame = new Element("iFrame", "CSS", "#duo_iframe");
    this.pushButton = new Element("Send Me a Push", "CLASS", "positive auth-button");
  };
  
  clickSignIn() {
    return this.signInButton.click();
  };

  async clickSendMePush() {
    await browser.wait(EC.visibilityOf(this.iFrame.element), 10000);
    await browser.switchTo().frame(0);
    await browser.wait(EC.elementToBeClickable(this.pushButton.element), 10000);
    return this.pushButton.click();
  };

  typeLogin() {
    browser.wait(EC.visibilityOf(this.loginField.element), 10000);
    return this.loginField.type(creds.login);
  };
  typePassword() {
    return this.passwordField.type(creds.password);
  };
};

module.exports = LoginPage;