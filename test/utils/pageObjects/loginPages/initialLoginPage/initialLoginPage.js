const BasePage = require("../../basePage/basePage");
const Element = require("../../baseElements/baseElement");

class InitialLoginPage extends BasePage {
  constructor() {
    super();
    this.signInWithEpamButton = new Element("Sign In With Epam data", "ID", "zocial-epam.com");
  };
  
  clickSignInWithEpamCreds() {
    this.signInWithEpamButton.click();
  };

};

module.exports = InitialLoginPage;