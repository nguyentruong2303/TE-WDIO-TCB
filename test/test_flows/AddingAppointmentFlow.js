const SchedulerPage = require('../pageobjects/SchedulerPage');
const APPOINTMENT_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:"", file:""}

class AddingAppointmentFlow {
    constructor() {
    };

    async addingRegularAppointment(APPOINTMENT_DATA) {
        await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
        await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
        await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
        await SchedulerPage.uploadAttachment(APPOINTMENT_DATA.file);
        await SchedulerPage.clickAddAppointment();
    };

    async verifyAddingAppointment(APPOINTMENT_DATA) {
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
        await expect(actualResult).toEqual(APPOINTMENT_DATA.subject);
        return this;
    };

    async verifyErrorMessageAddAppointment() {
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
    };

    async addingAllDayAppointment(APPOINTMENT_DATA) {
        await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
        await SchedulerPage.uploadAttachment(APPOINTMENT_DATA.file);
        await SchedulerPage.clickAddAppointment();
    };

    async addingRepeatingAppointment(APPOINTMENT_DATA) {
        await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
        await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
        await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
        await SchedulerPage.clickAddAppointment();
    };
}
module.exports = new AddingAppointmentFlow();