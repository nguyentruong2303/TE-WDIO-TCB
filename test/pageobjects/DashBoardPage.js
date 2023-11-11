const ADMINISTRATION_SERVICE = 'a[title="cybozu.com Administration"]';
const GAROON_SERVICE = 'div.service-list-slash>a[title="Garoon"]';
const CYBOZU_OFFICE_SERVICE = 'div.service-list-slash>a[title="Cybozu Office"]';
const KINTONE_SERVICE = 'div.service-list-slash>a[title="kintone"]';
const MAILWISE_SERVICE = 'div.service-list-slash>a[title="Mailwise"]';
const NOTIFIER_CYBOZU = 'div#bubble-2>a';

import PortalPage from './PortalPage.js';

class DashBoardPage {

    async openAdministrationService() {
        await $(ADMINISTRATION_SERVICE).click();
    }
    async openGaroonService() {
        await $(GAROON_SERVICE).click();
        return PortalPage;
    }
    async openCybozuOffice() {
        await $(CYBOZU_OFFICE_SERVICE).click();
    }
    async openKinToneService() {
        await $(KINTONE_SERVICE).click();
    }
    async openMailWiseService() {
        await $(MAILWISE_SERVICE).click();
    }
    
    async closeNotifierCybozu() {
        await $(NOTIFIER_CYBOZU).click();
    }

    
}



export default new DashBoardPage();