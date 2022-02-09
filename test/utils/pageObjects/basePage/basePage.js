const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
};

module.exports = BasePage;