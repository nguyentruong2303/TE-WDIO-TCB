describe('Windows Frame', () => {
    xit('Switch windows tab', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await $('body a.blinkingText').click();
        await browser.switchWindow('https://rahulshettyacademy.com/documents-request');
        //const title = await $('h1').getText();
        await expect($('h1')).toHaveText('DOCUMENTS REQUEST');
        await browser.closeWindow();
        await browser.switchWindow('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await browser.getTitle());
    });

    it('Switch Frame', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await $('#mousehover').scrollIntoView();
        console.log(await $$("a").length)
        const mainIFrame = await $('#courses-iframe');
        await browser.switchToFrame(mainIFrame);
        console.log(await $("=Courses").getTagName());
        console.log(await $$("a").length)
        await browser.switchToFrame(null);
        console.log(await $$("a").length)

    })
})


