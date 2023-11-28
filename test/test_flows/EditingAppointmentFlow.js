const SchedulerPage = require('../pageobjects/SchedulerPage');
const APPOINTMENT_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:"", file:""}

class EditingAppointmentFlow {
    async edittingRegularAppointment(APPOINTMENT_DATA) {
        await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
        await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
        await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
        await SchedulerPage.clickAddAppointment();
    };

    async edittingAllDayAppointment(APPOINTMENT_DATA) {
        await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
        await SchedulerPage.clickAddAppointment();
    };

    async edittingRepeatingAppointment(APPOINTMENT_DATA) {
        await SchedulerPage.selectRangeAllAppointment();
        await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
        await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
        await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
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
}
module.exports = new EditingAppointmentFlow();