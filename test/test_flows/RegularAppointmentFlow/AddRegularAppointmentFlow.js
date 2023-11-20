const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
let APPOINTMENT_DATA = {startDate:"", startTime:"", endDate:"", endTime:"", subject:"", note: "", file: ""};

class AddRegularAppointmentFlow {
    async addRegularAppointmentSuccessfully(APPOINTMENT_DATA){
      await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
      await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
      await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
      await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
      await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
      await SchedulerPage.selectAttendees();
      await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
      await SchedulerPage.uploadAttachment(APPOINTMENT_DATA.file);
      await SchedulerPage.clickAddAppointment();
      let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
      await expect(actualResult).toEqual(APPOINTMENT_DATA.subject);
      return this;
    };
    async addRegularAppointmentUnSuccessfullyWithDateAndTimeAreInvalid(APPOINTMENT_DATA) {
      await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
      await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
      await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
      await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
      await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
      await SchedulerPage.selectAttendees();
      await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
      await SchedulerPage.uploadAttachment(APPOINTMENT_DATA.file);
      await SchedulerPage.clickAddAppointment();
      await SchedulerPage.verifyErrorDisplayed();
      await SchedulerPage.clickOnMessageOK();
    return this;
    };
    async addRegularAppointmentUnSuccessfullyWithAttendeesEmpty(APPOINTMENT_DATA) {
      await SchedulerPage.selectStartDate(APPOINTMENT_DATA.startDate);
      await SchedulerPage.selectStartTime(APPOINTMENT_DATA.startTime);
      await SchedulerPage.selectEndDate(APPOINTMENT_DATA.endDate);
      await SchedulerPage.selectEndTime(APPOINTMENT_DATA.endTime);
      await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
      await SchedulerPage.removeAllUserAttendees();
      await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
      await SchedulerPage.uploadAttachment(APPOINTMENT_DATA.file);
      await SchedulerPage.clickAddAppointment();
      await SchedulerPage.verifyErrorDisplayed();
      await SchedulerPage.clickOnMessageOK();
    return this;
    };
}
module.exports = new AddRegularAppointmentFlow();