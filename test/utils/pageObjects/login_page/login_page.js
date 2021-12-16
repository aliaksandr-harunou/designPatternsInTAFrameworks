const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const creds = require('./credentials');
const EC = protractor.ExpectedConditions;

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = "https://heroes.epam.com/";
    this.loginField = new Element("Login field", "#userNameInput");
    this.passwordField = new Element("Password field", "#passwordInput");
    this.signInButton = new Element("Sign In button", "#submitButton");
    this.iFrame = new Element("iFrame", "#duo_iframe");
    this.pushButton = new Element("Send Me a Push", "#auth_methods > fieldset > div.row-label.push-label > button");
  };
  open() {
    return super.open(this.url);
  };

  async clickSignIn() {
    await browser.wait(EC.elementToBeClickable(this.signInButton.element), 10000);
    return this.signInButton.click();
  };

  async clickSendMePush() {
    await browser.wait(EC.visibilityOf(this.iFrame.element), 10000);
    await browser.switchTo().frame(0);
    await browser.wait(EC.elementToBeClickable(this.pushButton.element), 10000);
    return this.pushButton.click();
  };

  async typeLogin() {
    await browser.wait(EC.visibilityOf(this.loginField.element), 10000);
    return this.loginField.type(creds.login);
  };
  
  async typePassword() {
    await browser.wait(EC.visibilityOf(this.passwordField.element), 10000);
    return this.passwordField.type(creds.password);
  };
};

module.exports = LoginPage;