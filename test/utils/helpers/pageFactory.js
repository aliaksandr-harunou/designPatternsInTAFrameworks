const HomePage = require("../pageObjects/home_page/home_page");
const MyProfilePage = require("../pageObjects/my_profile_page/my_profile_page");
const LoginPage = require("../pageObjects/login_page/login_page");
const MicrosoftLoginPage = require("../pageObjects/login_page/microsoft_login_page");
const BasePage = require("../pageObjects/base_page/base_page");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();  
            case "Login":
                return new LoginPage();     
            case "MicrosoftLogin":
                return new MicrosoftLoginPage();  
            case "MyProfile":
                return new MyProfilePage();      
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;