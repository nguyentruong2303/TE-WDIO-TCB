const DashBoardPage = require('../pageobjects/DashBoardPage.js')
const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'input.login-button';
const LOGIN_ERROR_MSG = 'div.login-error-message';
const LOGIN_DATA = {username:"", password:""};


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    async loginToGaroonWithCredentials(LOGIN_DATA) {
        await $(USERNAME_TXB).setValue(LOGIN_DATA.username);
        await $(PASSWORD_TXB).setValue(LOGIN_DATA.password);
        await $(LOGIN_BTN).click();
        return DashBoardPage;
    };
    async verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword() {
        await expect($(LOGIN_ERROR_MSG)).toHaveText('Invalid login name or password.');
        return this;
    };
}

module.exports = new LoginPage();
