const logger = require('../../config/logger.config');

async function mauseClick(element, elementName) {
    await highlight(element);
    logger.info(`Mause Clicking "${elementName}"`);
    await browser.actions().mouseMove(element).mouseDown().mouseUp().perform();
}

async function scrollTo(element, elementName) {
    logger.info(`Scrolling to "${elementName}"`);
    return await browser.executeScript("arguments[0].scrollIntoView();", element);
}

async function hover(element) {
    logger.info(`Hovering`);
    return await browser.actions().mouseMove(element).perform();
}

async function pressENTER() {
    logger.info(`Pressing ENTER`);
    return await browser.actions().sendKeys(protractor.Key.ENTER).perform();
}

async function highlight(element) {
    let backgroundColor = await element.getCssValue("background-color");
    await browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", element);
    await browser.sleep(100);
    await browser.executeScript("arguments[0].style.backgroundColor = '" + backgroundColor + "'", element);
}


module.exports = {mauseClick, scrollTo, hover, highlight, pressENTER};