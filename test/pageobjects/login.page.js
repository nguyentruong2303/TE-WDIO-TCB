import Page from './page.js';

const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'input.login-button';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
     inputUsername (username) {
         $(USERNAME_TXB).setValue(username);
         return this;
    }

     inputPassword (password) {
         $(PASSWORD_TXB).setValue(password);
         return this;
    }

     clickOnLoginBtn () {
         $(LOGIN_BTN).click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new LoginPage();
