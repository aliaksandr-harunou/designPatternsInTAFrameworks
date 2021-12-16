const logger = require('../../../../test/config/logger.config.js');
const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };

    wait(seconds) {
        logger.info(`Waiting "${seconds * 1000}" milliseconds`);
        return browser.sleep(seconds * 1000);
    };

    async getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();
        logger.debug(`Current url is "${currentUrl}"`);
        return currentUrl;
    };
    
    open(url) {
        logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };
};

module.exports = BasePage;