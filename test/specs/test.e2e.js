import LoginPage from '../pageobjects/login.page.js'
import ServicePage from '../pageobjects/services.page.js'

describe('My Login application', () => {

    it('should login with valid credentials', async () => {

        await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/');

        await LoginPage.inputUsername('cybozu');
        await LoginPage.inputPassword('cybozu');
        await LoginPage.clickOnLoginBtn();
        await expect(browser).toHaveTitle('Information');
    })
})

