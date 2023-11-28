const allureReporter = require('@wdio/allure-reporter').default;
const LoginPage = require('../pageobjects/LoginPage');


const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'input.login-button';

describe('Login', () => {

    beforeEach('Open browser and access into page', async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/login');
    });

    describe('data_login', function () {
        const tests = [
          {username: "cybozu123", password: "cybozu123"},
          {username: "!*#*#&@&$*", password: "cybozu123"},
          {username: "<script>alert('XSS')</script>", password: "cybozu123"},
          {username: "はじめまして", password: "cybozu123"},
          {username: "ㄋㄆㄐ師吃ㄇㄨㄠˉ", password: "cybozu123"},
          {username: "cybozu123456789", password: "cybozu123456789"}
        ];

    tests.forEach(({username, password}) => {
        it('TC_03_Login_Unsuccessfully', async () => {
            allureReporter.addDescription('Login successful with valid username and password');
            await $(USERNAME_TXB).setValue(username);
            await $(PASSWORD_TXB).setValue(password);
            await $(LOGIN_BTN).click();
            await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
        });
    });
    });
});

