const expect = require("chai").expect;
const PageFactory = require("../utils/helpers/pageFactory");
const {mauseClick, scrollTo, hover} = require('../utils/helpers/actionsFunctions');
const EC = protractor.ExpectedConditions;

describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await PageFactory.getPage("Login").open();
        await PageFactory.getPage("Login").typeLogin();
        await PageFactory.getPage("Login").typePassword();
        const signInButton = await PageFactory.getPage("Login").signInButton.element;
        const signInButtonName = await PageFactory.getPage("Login").signInButton.elementName;
        await mauseClick(signInButton, signInButtonName);
        await PageFactory.getPage("Login").wait(Math.floor(Math.random() * 10));
        await PageFactory.getPage("Login").clickSendMePush();
        const yesButton = await PageFactory.getPage("MicrosoftLogin").yesButton.element;
        const yesButtonName = await PageFactory.getPage("MicrosoftLogin").yesButton.elementName;
        await browser.wait(EC.elementToBeClickable(yesButton), 20000);
        await mauseClick(yesButton, yesButtonName); 
        await PageFactory.getPage("Home").waitForFirstNavigationButton();
        await PageFactory.getPage("Home").Header.navigationButtons.clickElementByText("My Profile");
        await PageFactory.getPage("MyProfile").waitForRecentBadges();
        const countOfRecentBadges = await PageFactory.getPage("MyProfile").getCountOfRecentBadges();
        const appreciationsBadges  = await PageFactory.getPage("MyProfile").appriciationsSection.collection.get(0);
        const appreciationsBadgesName  = await PageFactory.getPage("MyProfile").appriciationsSection.elementName;
        await browser.wait(EC.visibilityOf(appreciationsBadges), 20000);
        await scrollTo(appreciationsBadges, appreciationsBadgesName);
        await PageFactory.getPage("MyProfile").wait(3);
        const firstBadgeOfappreciationBadge = await PageFactory.getPage("MyProfile").appriciationsSection.collection.get(0);
        await hover(firstBadgeOfappreciationBadge);
        await PageFactory.getPage("MyProfile").wait(3);
        expect(countOfRecentBadges).to.be.equal(11);
    });
});