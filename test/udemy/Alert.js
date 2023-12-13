describe('Handing Alert', () => {
    it('Get Message Alert', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await $('#alertbtn').click();
        const MESSAGE_ALERT = await browser.getAlertText();
        await browser.acceptAlert();
        await browser.pause(3000);
    })
})