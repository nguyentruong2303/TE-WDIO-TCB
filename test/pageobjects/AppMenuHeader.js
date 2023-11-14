import Portal from "./PortalPage.js";

class AppMenuHeader {
    async clickOnAppMenu(app_name) {
        const APP_NAME_LINK = `//nobr[text()="${app_name}"]`
        await $(APP_NAME_LINK).click();
        switch(APP_NAME_LINK) {
            case 'Scheduler':
                return this;
            case 'Portal':
                return Portal;
        }
    }
}

export default new AppMenuHeader();