const LoginPage = require('../pageobjects/LoginPage.js');
const {VALID_LOGIN} = require('../test_datas/Login_Data.js');
const {INVALID_LOGIN} = require('../test_datas/Login_Data.js');
const allureReporter =  require('@wdio/allure-reporter').default;

describe('Login', () => {
    beforeEach('Go to Login Page', async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com');
    });

    it('TC_01_Invalid_username', async () => {
        allureReporter.addFeature('Login');
        allureReporter.addDescription('Login unsuccessful with invalid username');
        await LoginPage.loginToGaroonWithCredentials(INVALID_LOGIN);
        await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
    });

    it('TC_02_Invalid_Password', async () => {
        allureReporter.addFeature('Login');
        allureReporter.addDescription('Login unsuccessful with invalid password');
        await LoginPage.loginToGaroonWithCredentials(INVALID_LOGIN);
        await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
    });

    it('TC_03_Login_successfully', async () => {
        allureReporter.addFeature('Login');
        allureReporter.addDescription('Login successful with valid username and password');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
        await expect(browser).toHaveTitle('Information');
    });

});


