const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
const REPEATING_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:""};

class AddRepeatingAppointmentFlow {
    async addRepeatingAppointmentUnsuccessfullyWithDateAndTimeAreInvalid(REPEATING_DATA) {
        await SchedulerPage.selectStartDate(REPEATING_DATA.startDate);
        await SchedulerPage.selectEndDate(REPEATING_DATA.endDate);
        await SchedulerPage.selectStartTime(REPEATING_DATA.startTime);
        await SchedulerPage.selectEndTime(REPEATING_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(REPEATING_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(REPEATING_DATA.note);
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
      return this;
    };
    async addRepeatingAppointmentUnsuccessfullyWithAttendeesAreEmpty(REPEATING_DATA) {
        await SchedulerPage.selectStartDate(REPEATING_DATA.startDate);
        await SchedulerPage.selectEndDate(REPEATING_DATA.endDate);
        await SchedulerPage.selectStartTime(REPEATING_DATA.startTime);
        await SchedulerPage.selectEndTime(REPEATING_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(REPEATING_DATA.subject);
        await SchedulerPage.removeAllUserAttendees();
        await SchedulerPage.inputNotes(REPEATING_DATA.note);
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
      return this;
    };
    async addRepeatingAppointmentSuccessfully(REPEATING_DATA) {
        await SchedulerPage.selectStartDate(REPEATING_DATA.startDate);
        await SchedulerPage.selectEndDate(REPEATING_DATA.endDate);
        await SchedulerPage.selectStartTime(REPEATING_DATA.startTime);
        await SchedulerPage.selectEndTime(REPEATING_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(REPEATING_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(REPEATING_DATA.note);
        await SchedulerPage.clickAddAppointment();
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
        await expect(actualResult).toEqual(REPEATING_DATA.subject);
        return this;
    };
}
module.exports = new AddRepeatingAppointmentFlow();