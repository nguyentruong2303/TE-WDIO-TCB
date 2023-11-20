import {VALID_LOGIN, INVALID_LOGIN} from '../test_datas/Login_Data.js';
import allureReporter from '@wdio/allure-reporter'



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
          {username: "cybozu123456789", password: "cybozu123456789"}
        ];

    tests.forEach(({username, password}) => {
        it('TC_03_Login_successfully', async () => {
            allureReporter.addFeature('Login');
            allureReporter.addDescription('Login successful with valid username and password');
            await $(USERNAME_TXB).setValue(username);
            await $(PASSWORD_TXB).setValue(password);
            await $(LOGIN_BTN).click();
            await expect(browser).toHaveTitle('Information');
        });
    });
    });
});

