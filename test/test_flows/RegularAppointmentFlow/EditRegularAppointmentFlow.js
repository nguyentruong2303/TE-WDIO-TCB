const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
const REGULAR_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:""};

class EditRegularAppointmentFlow {

    async editRegularAppointmentUnsuccessWithDateAndTimeAreInvalid(REGULAR_DATA) {
        await SchedulerPage.selectStartDate(REGULAR_DATA.startDate);
        await SchedulerPage.selectStartTime(REGULAR_DATA.startTime);
        await SchedulerPage.selectEndDate(REGULAR_DATA.endDate);
        await SchedulerPage.selectEndTime(REGULAR_DATA.endTime);
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
        return this;
    };

    async editRegularAppointmentUnsuccessWithAttendeesAreEmpty() {
        await SchedulerPage.removeAllUserAttendees();
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
        return this;
    };

    async editRegularAppointmentSuccess(REGULAR_DATA) {
        await SchedulerPage.selectStartDate(REGULAR_DATA.startDate);
        await SchedulerPage.selectStartTime(REGULAR_DATA.startTime);
        await SchedulerPage.selectEndDate(REGULAR_DATA.endDate);
        await SchedulerPage.selectEndTime(REGULAR_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(REGULAR_DATA.subject);
        await SchedulerPage.inputNotes(REGULAR_DATA.note);
        await SchedulerPage.clickAddAppointment();
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
        await expect(actualResult).toEqual(REGULAR_DATA.subject);
        return this;
    };
}
module.exports = new EditRegularAppointmentFlow();
