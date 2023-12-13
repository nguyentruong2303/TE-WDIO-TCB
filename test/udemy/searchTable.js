describe('Search Table', () => {
    it('Search Table' , async() => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        await $('#search-field').setValue('Tomato');
        const veggSelector = await $$('//tr/td[1]');
        await expect(veggSelector).toBeElementsArrayOfSize({eq:1});
        await expect(veggSelector).toHaveTextContaining('Tomato');
    })
})