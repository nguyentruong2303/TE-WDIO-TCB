const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
const ALL_DAY_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:"", file:""};

class AddAllDayAppointmentFlow {
    async addAllDayAppointmentUnsuccessfullyWithEndDateInvalid(ALL_DAY_DATA) {
        await SchedulerPage.selectStartDate(ALL_DAY_DATA.startDate);
        await SchedulerPage.selectEndDate(ALL_DAY_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(ALL_DAY_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(ALL_DAY_DATA.note);
        await SchedulerPage.uploadAttachment(ALL_DAY_DATA.file);
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
      return this;
    };
    async addAllDayAppointmentUnsuccessfullyWithAttendeesIsEmpty(ALL_DAY_DATA){
        await SchedulerPage.selectStartDate(ALL_DAY_DATA.startDate);
        await SchedulerPage.selectEndDate(ALL_DAY_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(ALL_DAY_DATA.subject);
        await SchedulerPage.removeAllUserAttendees();
        await SchedulerPage.inputNotes(ALL_DAY_DATA.note);
        await SchedulerPage.uploadAttachment(ALL_DAY_DATA.file);
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
      return this;
    };
    async addAllDayAppointmentSuccessfully(ALL_DAY_DATA) {
        await SchedulerPage.selectStartDate(ALL_DAY_DATA.startDate);
        await SchedulerPage.selectEndDate(ALL_DAY_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(ALL_DAY_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(ALL_DAY_DATA.note);
        await SchedulerPage.uploadAttachment(ALL_DAY_DATA.file);
        await SchedulerPage.clickAddAppointment();
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
        await expect(actualResult).toEqual(ALL_DAY_DATA.subject);
        return this;
    };

}
module.exports = new AddAllDayAppointmentFlow();