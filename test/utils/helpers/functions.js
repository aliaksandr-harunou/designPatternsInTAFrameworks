const logger = require('../../../test/config/logger.config.js');
const EC = protractor.ExpectedConditions;


async function getCurrenUrl() {
    const currentUrl = await browser.getCurrentUrl();
    logger.debug(`Current url is "${currentUrl}"`);
    return currentUrl;
};

function wait(seconds) {
    logger.info(`Waiting "${seconds * 1000}" milliseconds`);
    return browser.sleep(seconds * 1000);
};

async function open(url) {
    logger.info(`Opening "${url}" url`);
    await browser.get(url);
}

async function waitUntilVisible(element) {
    await browser.wait(EC.visibilityOf(element), 20000);
}



module.exports = {getCurrenUrl, wait, open, waitUntilVisible};