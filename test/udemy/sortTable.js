const expectedChai = require('chai').expect;
describe('Sort Table', () => {
    it('Sort Table', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        await $('//tr/th[1]').click();
        const veggSelector = $$('//tr/td[1]');
        const veggSelectFilter = await veggSelector.map(vegg =>  vegg.getText());
        console.log(veggSelectFilter);
        const veggOriginal = (await veggSelectFilter).sort();
        console.log(veggOriginal);
        await expectedChai(veggOriginal).to.equal(veggOriginal);
    })
})