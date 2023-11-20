const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
const ALL_DAY_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note:""};

class EditAllDayAppointmentFlow {

    async editAllDayAppointmentUnsuccessWithDateIsInvalid(ALL_DAY_DATA) {
        await SchedulerPage.selectStartDate(ALL_DAY_DATA.startDate);
        await SchedulerPage.selectEndDate(ALL_DAY_DATA.endDate);
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

    async editRegularAppointmentSuccess(ALL_DAY_DATA) {
        await SchedulerPage.selectStartDate(ALL_DAY_DATA.startDate);
        await SchedulerPage.selectEndDate(ALL_DAY_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(ALL_DAY_DATA.subject);
        await SchedulerPage.inputNotes(ALL_DAY_DATA.note);
        await SchedulerPage.clickAddAppointment();
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
        await expect(actualResult).toEqual(ALL_DAY_DATA.subject);
        return this;
    };
}
module.exports = new EditAllDayAppointmentFlow();
