import Page from '../pageobjects/Page.js';
import DashBoard from '../pageobjects/DashBoardPage.js';

const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'input.login-button';
const LOGIN_ERROR_MSG = 'div.login-error-message';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    async loginToGaroonWithCredentials(username, password) {
        await $(USERNAME_TXB).waitForDisplayed({timeout: 5000});
        await $(USERNAME_TXB).clearValue();
        await $(USERNAME_TXB).setValue(username);
        await $(PASSWORD_TXB).clearValue();
        await $(PASSWORD_TXB).setValue(password);
        await $(LOGIN_BTN).click();
        return DashBoard;
    }

    async verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword() {
        await expect($(LOGIN_ERROR_MSG)).toHaveText('Invalid login name or password.');
        return this;
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new LoginPage();
