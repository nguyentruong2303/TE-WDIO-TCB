const NEW_LINK = "//a[text()='New']";
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
const NOTES_TXA = "textarea_id";
const ATTACHMENTS_FUL = ".file_input_div";
const ADD_BTN = "#schedule_submit_button";

import AppMenuHeader from "./AppMenuHeader";

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
    async selectStartDateAndTime(start_month, start_day, start_year, start_hour, start_minute) {
        await $(START_MONTH_DDL).selectByVisibleText(start_month);
        await $(START_DAY_DDL).selectByVisibleText(start_day);
        await $(START_YEAR_DDL).selectByVisibleText(start_year);
        await $(START_HOUR_DDL).selectByVisibleText(start_hour);
        await $(START_MINUTE_DDL).selectByVisibleText(start_minute);
    }
    async selectEndDateAndTime(end_month, end_day, end_year, end_hour, end_minute) {
        await $(END_MONTH_DDL).selectByVisibleText(end_month);
        await $(END_DAY_DDL).selectByVisibleText(end_day);
        await $(END_YEAR_DDL).selectByVisibleText(end_year);
        await $(END_HOUR_DDL).selectByVisibleText(end_hour);
        await $(END_MINUTE_DDL).selectByVisibleText(end_minute);
    }
    async inputSubjectAppointment(title_appointment) {
        await $(SUBJECT_TXB).clearValue();
        await $(SUBJECT_TXB).setValue(title_appointment);
    }
    async selectAttendees() {
        await $(SELECT_ALL_USER_BTN).click();
        await $(ADD_USER_BTN).click();
    }
    async selectFacilities() {
        await $(SELECT_ALL_FACILITIES_BTN).click();
        await $(ADD_FACILITIES_BTN).click(); 
    }
    async inputNotes(value_note) {
        await $(NOTES_TXA).clearValue();
        await $(NOTES_TXA).setValue(title_appointment);    
    }
    

}
export default new SchedulerPage();



