const expectedChai = require('chai').expect;

describe('Order Phone', () => {
    it('Order Iphone and SamSung', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await $('#username').setValue('rahulshettyacademy');
        await $('#password').setValue('learning');
        await $('#terms').click();
        await $('#signInBtn').click();

        await $("//a[text()='iphone X']/parent::h4/parent::div//following-sibling::div/button").click();
        await $("//a[text()='Samsung Note 8']/parent::h4/parent::div//following-sibling::div/button").click();

        const CHECKOUT_BTN = await $("//a[@class='nav-link btn btn-primary']");
        await expect(CHECKOUT_BTN).toHaveTextContaining(2);
        await CHECKOUT_BTN.click();

        const productPrices = await $$("//tr/td[4]/strong");
        let sumOfPrice = 0;
        for(let i = 0; i < await productPrices.length; i++) {
            const price = await productPrices[i].getText();
            sumOfPrice = sumOfPrice + parseInt(price.split(' ')[1]);
            console.log(sumOfPrice);
        }

        const totalPrice = await parseInt((await $("h3 strong").getText()).split('.')[1]);
        console.log(totalPrice);
        await expect(sumOfPrice).toEqual(totalPrice);

        await $("//button[@class='btn btn-success']").click();
        await $("#country").setValue('ind');
        await $("//a[text()='India']").click();
        await $("//input[@class='btn btn-success btn-lg']").click();
        await expect($("//div[@class='alert alert-success alert-dismissible']")).toHaveTextContaining('Success');

        

        

    })
})