const logger = require('../../../config/logger.config.js');
const {highlight} = require('../../helpers/actionsFunctions');

class Element {
    constructor(elementName, selectorType, selector) {
        if (selectorType === "CSS") {
            this.element = element(by.css(selector));
        } else if (selectorType === "XPATH") {
            this.element = element(by.xpath(selector));
        } else if (selectorType === "ID") {
            this.element = element(by.id(selector));
        } else if (selectorType === "CLASS") {
            this.element = element(by.className(selector));
        }       
        this.elementName = elementName;
    }
    
    async click() {
        await highlight(this.element);
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };

    async type(text) {
        await highlight(this.element);
        logger.info(`Typing "${text}" into "${this.elementName}"`);    
        return await this.element.sendKeys(text);
    };

    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };
};

module.exports = Element;