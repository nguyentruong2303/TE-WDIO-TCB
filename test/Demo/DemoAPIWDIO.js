import LoginPage from "../pageobjects/LoginPage.js";
import { Key } from 'webdriverio';
import path from 'node:path';



const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'input.login-button';

//describe('Demo API WDIO', function() {

//     it('Demo API $$', async function() {
//         browser.maximizeWindow();
//         await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/g');
//         await LoginPage.loginToGaroonWithCredentials('cybozu','cybozu');
//         console.log('test')
//         // const APP_MENU = 'div.appmenu-item-icon';
//         // for await (const item1 of $$(APP_MENU)) {
//         //     await item1.click();
//         //     console.log(item1.getText());
//         // }
//         const MENU_NOTIFICATION = await $('div.appmenu-item-icon');
//         await MENU_NOTIFICATION.click();
//     });
// })
// describe('This Example show usage of $$ command in webdriverio',  () => {

//     it('should fetch multiple element based on the locator passed and perform actions accordingly',async ()=> {

//     await browser.url('http://omayo.blogspot.com');

//     const text = await $$('//*[@id="HTML25"]/div[1]/ol/li');

//     console.log(text[2].getText());

//     });
        // it('Demo API keys',async function() {
        //     await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/g');


        // await $(USERNAME_TXB).clearValue();
        // await $(USERNAME_TXB).setValue('cybozu');
        // await browser.keys([Key.Ctrl, 'a']);
        // await browser.keys([Key.Ctrl, 'c']);
        // await $(PASSWORD_TXB).click();
        // await browser.keys([Key.Ctrl, 'v']);

        // await $(LOGIN_BTN).click();

        // });
        
    // it('Demo API newWindow', async () => {
    //     await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/g');
    //     await browser.newWindow('https://webdriver.io');
    //     console.log(browser.getTitle());
    // })

    // it('Demo API pause',async function() {
    //     await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/g');
    //     await browser.pause(5000);
    //     await browser.newWindow('https://webdriver.io');
    //      console.log(browser.getTitle());
    // });

    // it('Demo API saveScreenshot',async function () {
    //     await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com/g');
    //     await browser.pause(3000);
    //     await browser.saveScreenshot('../TOPIC3_WDIO/test/screenshot/screenshot.png');
    // });

    // it('Demo API scroll', async function() {
    // await browser.url('https://webdriver.io')

    // console.log(await browser.execute(() => window.scrollY)) // returns 0
    // await browser.scroll(0, 200);
    // console.log(await browser.execute(() => window.scrollY)) // return 200
    // });
    // it('Demo API switch Window', async function() {
    //      // open url
    // await browser.url('https://google.com');
    // await browser.setTimeout({
    //     'pageLoad':3000
    // });

    // // create new window
    // await browser.newWindow('https://webdriver.io');
    // await browser.setTimeout({
    //     'pageLoad':5000
    // });

    // // switch back via url match
    // await browser.switchWindow('google.com');

    // // switch back via title match
    // await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js');
    // });

    // it('Demo API upload a file', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/upload');
    
    //     const filePath = '../TOPIC3_WDIO/test/screenshot/screenshot.png';
    //     const remoteFilePath = await browser.uploadFile(filePath);
    
    //     await $('#file-upload').setValue(remoteFilePath);
    //     await $('#file-submit').click();
    //     const UPLOADED_FILE = '#uploaded-files';
    //     await expect($(UPLOADED_FILE)).toHaveText('screenshot.png');
    // });

    // it('Demo API url', async function () {
    //     await browser.url('https://webdriver.io');
    //     console.log(await browser.getUrl()); // outputs: "https://webdriver.io"
    //     // When not starting with a slash, the URL resolves relative to the baseUrl
    //     // http://example.com/site/relative
    //     await browser.url('relative');
    //     console.log(await browser.getUrl());
    //     // When starting with a slash, the URL resolves relative to the root path of the baseUrl
    //     // http://example.com/rootRelative  
    //     await browser.url('/rootRelative');
    //     console.log(await browser.getUrl());

    // });

    // it('Test upload file on Garoon',async function () {
    //     const ATTACHMENTS_FUL = ".file_input_div";
    //     const ADD_BTN = "#schedule_submit_button";

    //     await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/add.csp?bdate=2023-11-13&uid=&gid=login&referer_key=7ce42aa6337b732f027026908172e328');
    //     LoginPage.loginToGaroonWithCredentials('cybozu','cybozu');
    //     (await $(ATTACHMENTS_FUL)).waitForExist({timeout:15000})
    //     const remoteFileUpload = await browser.uploadFile('../TOPIC3_WDIO/test/screenshot/screenshot.png');
    //     await (await $(ATTACHMENTS_FUL)).addValue(remoteFileUpload);
    //     await $(ADD_BTN).click();

    // })
//});