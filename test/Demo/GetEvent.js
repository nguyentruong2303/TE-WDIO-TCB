const LoginPage = require('../pageobjects/LoginPage.js');
const {VALID_LOGIN} = require('../test_datas/Login_Data.js');

describe('Get Event ID', () => {
    it('get event', async () => {
        await browser.url('/g/schedule/view.csp?event=57&bdate=2023-11-28');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
        await browser.pause(10000);
        const URL_PAGE = await browser.getUrl();
        console.log(URL_PAGE);
        const EVENT_ID = URL_PAGE.slice(65,67);
        console.log(EVENT_ID);
        const BDATE = URL_PAGE.slice(74,84);
        console.log(BDATE);
        await expect(browser).toHaveUrlContaining('57');
    });
})

