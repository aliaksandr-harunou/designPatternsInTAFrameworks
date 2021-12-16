const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");
const EC = protractor.ExpectedConditions;

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", ".uui-caption");
        this.giveBadgeButton = new Element("Give Badge Button", "#heroesGiveBadge");
        this.searchField = new Element("Search for a person", ".uui-input");
    };

    async clickGiveBadgeButton(){
        await browser.wait(EC.elementToBeClickable(this.giveBadgeButton.element), 10000);
        return this.giveBadgeButton.click();
    };
    
    async waitForGiveBadgeButton() {
        return await browser.wait(EC.visibilityOf(this.giveBadgeButton.element), 30000);
    }
};

module.exports = Header;