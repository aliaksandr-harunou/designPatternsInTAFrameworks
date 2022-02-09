const HomePage = require("./homePage/homePage");
const MyProfilePage = require("./myProfilePage/myProfilePage");
const MicrosoftLoginPage = require("./loginPages/micrLoginPage/micrLoginPage");
const LoginPage = require("./loginPages/epamLoginPage/epamLoginPage");
const InitialLoginPage = require("./loginPages/initialLoginPage/initialLoginPage");
const BasePage = require("./basePage/basePage");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage(); 
            case "Microsoft":
                return new MicrosoftLoginPage(); 
            case "Initial":
                return new InitialLoginPage(); 
            case "Login":
                return new LoginPage();
            case "MyProfile":
                return new MyProfilePage();      
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;