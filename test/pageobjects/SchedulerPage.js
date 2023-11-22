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
const SELECT_ALL_SELECTLIST_BTN = "#select_all_selectlist_sUID";
const REMOVE_USER_BTN = "#btn_rmv_sUID";
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
const RANGE_ALL_APPOINTMENT_LBL = "//label[text()='All appointments']/preceding-sibling::input";
const dateAndTime = {year:"", month: "", day:"", hour: "", minute:""};
const ERROR_DIAGNOSOS_LBL = ".error_diagnosis";
const MSG_OK_BTN = "#msgbox_btn_ok";

class SchedulerPage {

    async openNewAppointment() {
        (await $(NEW_LINK)).waitForDisplayed({timeout:10000});
        await $(NEW_LINK).click();
    };

    async selectStartDate(dateAndTime) {
        await $(START_MONTH_DDL).selectByVisibleText(dateAndTime.month);
        await $(START_DAY_DDL).selectByVisibleText(dateAndTime.day);
        await $(START_YEAR_DDL).selectByVisibleText(dateAndTime.year);
    };
    async selectStartTime(dateAndTime) {
        await $(START_HOUR_DDL).selectByVisibleText(dateAndTime.hour);
        await $(START_MINUTE_DDL).selectByVisibleText(dateAndTime.minute);
    };

    async selectEndDate(dateAndTime) {
        await $(END_MONTH_DDL).selectByVisibleText(dateAndTime.month);
        await $(END_DAY_DDL).selectByVisibleText(dateAndTime.day);
        await $(END_YEAR_DDL).selectByVisibleText(dateAndTime.year);
    };
    async selectEndTime(dateAndTime) {
        await $(END_HOUR_DDL).selectByVisibleText(dateAndTime.hour);
        await $(END_MINUTE_DDL).selectByVisibleText(dateAndTime.minute);
    };

    async inputSubjectAppointment(title_appointment) {
        await $(SUBJECT_TXB).setValue(title_appointment);
    };

    async selectAttendees() {
        await $(SELECT_ALL_USER_BTN).click();
        await $(ADD_USER_BTN).click();
    };

    async selectFacilities() {
        await $(SELECT_ALL_FACILITIES_BTN).click();
        await $(ADD_FACILITIES_BTN).click(); 
    };

    async inputNotes(value_note) {
        await $(NOTES_TXA).setValue(value_note);    
    };

    async uploadAttachment(path) {
        const remoteFilePath = await browser.uploadFile(path);
        await $(ATTACHMENTS_FUL).addValue(remoteFilePath);
        await $(PROGRESS_BAR).waitForDisplayed({reverse: true});
    };

    async clickAddAppointment() {
        await $(SUBMIT_BTN).click();
    };

    async getSubjectOfAppointmentDetail() {
        return await $(APPOINTMENT_TITLE).getText();
    };

    async openEditAppointment() {
        await $(EDIT_LINK).click();
    };
    async deleteAppointment() {
        await $(DELETE_LINK).click();
        await $(ALL_ATTENDEES_RAD).click();
        await $(SAVE_BTN).click();
    };
    async clickOnMessageOK() {
        await $(MSG_OK_BTN).click();
    };

    async verifyDeletedAppointment() {
        await expect($(EVENT_LINK)).not.toExist();
    };
    async verifyErrorDisplayed() {
        await expect($(ERROR_DIAGNOSOS_LBL)).toExist();
    };
    async removeAllUserAttendees() {
        await $(SELECT_ALL_SELECTLIST_BTN).click();
        await $(REMOVE_USER_BTN).click();
    };
    async selectRangeAllAppointment() {
        await $(RANGE_ALL_APPOINTMENT_LBL).click();
    };
}

module.exports = new SchedulerPage();



