import LoginPage from 'test/pageobjects/login.page.js'

describe('My Login application', () => {

    it('should login with valid credentials', async () => {

        await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/');

        await LoginPage.login('cybozu', 'cybozu');
    })
})

