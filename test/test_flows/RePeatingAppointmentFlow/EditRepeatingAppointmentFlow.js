const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
const REPEATING_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:""};

class EditRepeatingAppointmentFlow {

    async editRepeatingAppointmentUnsuccessWithDateAndTimeAreInvalid(REPEATING_DATA) {
        await SchedulerPage.selectRangeAllAppointment();
        await SchedulerPage.selectStartDate(REPEATING_DATA.startDate);
        await SchedulerPage.selectStartTime(REPEATING_DATA.startTime);
        await SchedulerPage.selectEndDate(REPEATING_DATA.endDate);
        await SchedulerPage.selectEndTime(REPEATING_DATA.endTime);
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
        return this;
    };

    async editRepeatingAppointmentUnsuccessWithAttendeesAreEmpty() {
        await SchedulerPage.selectRangeAllAppointment();
        await SchedulerPage.removeAllUserAttendees();
        await SchedulerPage.clickAddAppointment();
        await SchedulerPage.verifyErrorDisplayed();
        await SchedulerPage.clickOnMessageOK();
        return this;
    };

    async editRepeatingAppointmentSuccess(REPEATING_DATA) {
        await SchedulerPage.selectRangeAllAppointment();
        await SchedulerPage.selectStartDate(REPEATING_DATA.startDate);
        await SchedulerPage.selectStartTime(REPEATING_DATA.startTime);
        await SchedulerPage.selectEndDate(REPEATING_DATA.endDate);
        await SchedulerPage.selectEndTime(REPEATING_DATA.endTime);
        await SchedulerPage.inputSubjectAppointment(REPEATING_DATA.subject);
        await SchedulerPage.inputNotes(REPEATING_DATA.note);
        await SchedulerPage.clickAddAppointment();
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
        await expect(actualResult).toEqual(REPEATING_DATA.subject);
        return this;
    };
}
module.exports = new EditRepeatingAppointmentFlow();
