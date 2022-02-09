const expect = require("chai").expect;
const PageFactory = require("../../utils/pageObjects/pageFactory");
const loginPage = PageFactory.getPage("Login");
const homePage = PageFactory.getPage("Home");
const myProfilePage = PageFactory.getPage("MyProfile");
const microsoftLoginPage = PageFactory.getPage("Microsoft");
const initialLoginPage = PageFactory.getPage("Initial");
const {mauseClick} = require('../../utils/helpers/actionsFunctions');
const {wait, open} = require("../../utils/helpers/functions");
const EC = protractor.ExpectedConditions;

describe("My Profile - Recent badges section", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await open('https://heroes.epam.com/');
        // await initialLoginPage.clickSignInWithEpamCreds();
        await loginPage.typeLogin();
        await loginPage.typePassword();
        const signInButton = await loginPage.signInButton.element;
        const signInButtonName = await loginPage.signInButton.elementName;
        await mauseClick(signInButton, signInButtonName);
        await wait(10);
        await loginPage.clickSendMePush();
        const yesButton = await microsoftLoginPage.yesButton.element;
        const yesButtonName = await microsoftLoginPage.yesButton.elementName;
        await browser.wait(EC.elementToBeClickable(yesButton), 20000);
        await mauseClick(yesButton, yesButtonName);
        await homePage.waitForFirstNavigationButton();
        await homePage.Header.navigationButtons.clickElementByText("My Profile");
        await myProfilePage.waitForRecentBadges();
        const countOfRecentBadges = await myProfilePage.getCountOfRecentBadges();
        expect(countOfRecentBadges).to.be.equal(11);
    });
});