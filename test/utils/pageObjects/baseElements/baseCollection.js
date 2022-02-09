const logger = require('../../../config/logger.config');

class Collection {
    constructor(elementName, selectorType, selector) {
        if (selectorType === "CSS") {
            this.collection = element.all(by.css(selector));
        } else if (selectorType === "XPATH") {
            this.collection = element.all(by.xpath(selector));
        } else if (selectorType === "ID") {
            this.element = element.all(by.id(selector));
        } else if (selectorType === "CLASS") {
            this.element = element.all(by.className(selector));
        }
        this.elementName = elementName;
    };
    async getCount() {
        const collectionCount = await this.collection.count();
        logger.info(`Count of "${this.elementName}" is "${collectionCount}"`);
        return collectionCount;
    };
    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Texts of "${this.elementName}" are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        this.collection.get(elementToClickIndex).click();
    };
};

module.exports = Collection;