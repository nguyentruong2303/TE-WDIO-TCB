import Page from './page.js';

const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'input.login-button';
const USERNAME_ERROR_MSG = '//input[@name="username"]/parent::div/following-sibling::div[1]';
const PASSWORD_ERROR_MSG = '//input[@name="password"]/parent::div/following-sibling::div';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    async inputUsername (username) {
        await $(USERNAME_TXB).setValue(username);
         return this;
    }

    async inputPassword (password) {
        await $(PASSWORD_TXB).setValue(password);
         return this;
    }

    async clickOnLoginBtn () {
        await $(LOGIN_BTN).click();
    }
    async getErrorMSGUsername() {
        (await $(USERNAME_ERROR_MSG)).getText();
    }
    async getErrorMSGPassword() {
        (await $(PASSWORD_ERROR_MSG)).getText();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new LoginPage();
