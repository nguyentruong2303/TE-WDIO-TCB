import LoginPage from '../pageobjects/LoginPage.js';
describe('Login', () => {

    beforeEach('Open browser and access into page', async () => {
        browser.maximizeWindow();
        await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/login');
    });

    it('TC_01_Invalid_username', async () => {
        await LoginPage.loginToGaroonWithCredentials('test1','cybozu');
        await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
    });

    it('TC_02_Invalid_Password', async () => {
        await LoginPage.loginToGaroonWithCredentials('cybozu','123456');
        await LoginPage.verifyLoginErrorMessageDisplayWhenInvalidUsernameOrPassword();
    });

    it('TC_03_Login_successfully', async () => {
        await LoginPage.loginToGaroonWithCredentials('cybozu','cybozu')
        await expect(browser).toHaveTitle('Information');
    });

})

