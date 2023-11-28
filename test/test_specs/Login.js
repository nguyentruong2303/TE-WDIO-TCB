const LoginPage = require('../pageobjects/LoginPage.js');
const {VALID_LOGIN} = require('../test_datas/Login_Data.js');
const {INVALID_LOGIN} = require('../test_datas/Login_Data.js');

describe('Login', () => {
    beforeEach('Go to Login Page', async () => {
        await browser.url('/login');
    });

    it('TC_01_Invalid_username', async () => {
        await LoginPage.loginToGaroonWithCredentials(INVALID_LOGIN);
        await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
    });

    it('TC_02_Invalid_Password', async () => {
        await LoginPage.loginToGaroonWithCredentials(INVALID_LOGIN);
        await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
    });

    it('TC_03_Login_successfully', async () => {
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
        await expect(browser).toHaveTitle('Information');
    });

});


