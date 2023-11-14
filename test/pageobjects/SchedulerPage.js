const NEW_LINK = "//span[@class='menu_item']/a[contains(@href,'/g/schedule/add.csp?')]";
const REGULAR_BTN = "div#regular_tab";
const ALL_DAY_BTN = "div#all_day_tab";
const REPEATING_BTN = "div#repeating_tab";
const START_MONTH_DDL = "select#start_month";
const START_DAY_DDL = "select#start_day";
const START_YEAR_DDL = "select#start_year";
const START_HOUR_DDL = "select#start_hour";
const START_MINUTE_DDL = "select#start_minute";
const END_MONTH_DDL = "select#end_month";
const END_DAY_DDL = "select#end_day";
const END_YEAR_DDL = "select#end_year";
const END_HOUR_DDL = "select#end_hour";
const END_MINUTE_DDL = "select#end_minute";
const SUBJECT_TXB = "input[name='title']";
const SELECT_ALL_USER_BTN = "#select_all_selectlist_CID";
const ADD_USER_BTN = "#btn_add_sUID";
const SELECT_ALL_FACILITIES_BTN = "#select_all_selectlist_cITEM";
const ADD_FACILITIES_BTN = "#btn_add_cITEM";
const NOTES_TXA = "#textarea_id";
const ATTACHMENTS_FUL = "#file_upload_";
const PROGRESS_BAR = '.progressbar_base_grn';
const SUBMIT_BTN = "#schedule_submit_button";
const APPOINTMENT_TITLE = "#event_list>h2";
const EDIT_LINK = "//a[contains(@href,'/g/schedule/modify.csp?')]";
const DELETE_LINK = "//a[contains(@href,'/g/schedule/delete.csp?')]";
const ALL_ATTENDEES_RAD = "//label[contains(text(),'All attendees')]/preceding-sibling::input";
const SAVE_BTN = "#schedule_button_save>a";
const EVENT_LINK = "//a[contains(@href,'/g/schedule/view.csp')]";
const dateAndTime = {year:"", month: "", day:"", hour: "", minute:""};

import AppMenuHeader from "./AppMenuHeader.js";

class SchedulerPage {
    async clickSchedulerAppOnMenuHeader(Scheduler) {
    await AppMenuHeader.clickOnAppMenu(Scheduler);
    }
    async selectTypeAppointment(type_appointment) {
        switch(type_appointment) {
            case 'Regular':
                await $(REGULAR_BTN).click();
            case 'All day':
                await $(ALL_DAY_BTN).click();
            case 'Repeating':
                await $(REPEATING_BTN).click();
        }
    }
    async openNewAppointment() {
        await $(NEW_LINK).waitForClickable({timeout:5000});
        await $(NEW_LINK).click();
    }
    async selectStartDateAndTime(dateAndTime) {
        await $(START_MONTH_DDL).waitForClickable({timeout: 5000});
        await $(START_MONTH_DDL).selectByVisibleText(dateAndTime.month);

        await $(START_DAY_DDL).waitForClickable({timeout: 5000});
        await $(START_DAY_DDL).selectByVisibleText(dateAndTime.day);

        await $(START_YEAR_DDL).waitForClickable({timeout: 5000});
        await $(START_YEAR_DDL).selectByVisibleText(dateAndTime.year);

        await $(START_HOUR_DDL).waitForClickable({timeout: 5000});
        await $(START_HOUR_DDL).selectByVisibleText(dateAndTime.hour);

        await $(START_MINUTE_DDL).waitForClickable({timeout: 5000});
        await $(START_MINUTE_DDL).selectByVisibleText(dateAndTime.minute);
    }
    async selectEndDateAndTime(dateAndTime) {
        await $(END_MONTH_DDL).waitForClickable({timeout: 5000});
        await $(END_MONTH_DDL).selectByVisibleText(dateAndTime.month);

        await $(END_DAY_DDL).waitForClickable({timeout: 5000});
        await $(END_DAY_DDL).selectByVisibleText(dateAndTime.day);

        await $(END_YEAR_DDL).waitForClickable({timeout: 5000});
        await $(END_YEAR_DDL).selectByVisibleText(dateAndTime.year);

        await $(END_HOUR_DDL).waitForClickable({timeout: 5000});
        await $(END_HOUR_DDL).selectByVisibleText(dateAndTime.hour);

        await $(END_MINUTE_DDL).waitForClickable({timeout: 5000});
        await $(END_MINUTE_DDL).selectByVisibleText(dateAndTime.minute);
    }
    async inputSubjectAppointment(title_appointment) {
        await $(SUBJECT_TXB).waitForExist({timeout: 5000});
        await $(SUBJECT_TXB).setValue(title_appointment);
    }
    async selectAttendees() {
        await $(SELECT_ALL_USER_BTN).waitForDisplayed({timeout: 5000});
        await $(SELECT_ALL_USER_BTN).click();
        await $(ADD_USER_BTN).click();
    }
    async selectFacilities() {
        await $(SELECT_ALL_FACILITIES_BTN).waitForDisplayed({timeout: 5000});
        await $(SELECT_ALL_FACILITIES_BTN).click();
        await $(ADD_FACILITIES_BTN).click(); 
    }
    async inputNotes(value_note) {
        await $(NOTES_TXA).waitForExist({timeout: 5000});
        //await browser.setValue(NOTES_TXA,value_note);
        await $(NOTES_TXA).setValue(value_note);    
    }
    async uploadAttachment(path) {
        await $(ATTACHMENTS_FUL).waitForExist({timeout: 5000});
        const remoteFilePath = await browser.uploadFile(path);
        await $(ATTACHMENTS_FUL).addValue(remoteFilePath);
        await $(PROGRESS_BAR).waitForDisplayed({reverse: true});
    }
    async clickAddAppointment() {
        await $(SUBMIT_BTN).waitForClickable({timeout:5000});
        await $(SUBMIT_BTN).click();
    }
    async getSubjectOfAppointmentDetail() {
        await $(APPOINTMENT_TITLE).waitForExist({timeout:5000});
        return await $(APPOINTMENT_TITLE).getText();

    }

    async openEditAppointment() {
        await $(EDIT_LINK).waitForClickable({timeout:5000});
        await $(EDIT_LINK).click();
    }
    async deleteAppointment() {
        await $(DELETE_LINK).waitForClickable({timeout:5000});
        await $(DELETE_LINK).click();

        await $(ALL_ATTENDEES_RAD).waitForExist({timeout:5000});
        await $(ALL_ATTENDEES_RAD).click();

        await $(SAVE_BTN).waitForClickable({timeout:5000});
        await $(SAVE_BTN).click();
    }

    async verifyDeletedAppointment() {
        await $(EVENT_LINK).waitForExist({reverse:true});
        await expect($(EVENT_LINK)).not.toExist();
    }

}
export default new SchedulerPage();



