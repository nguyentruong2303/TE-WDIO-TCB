import SchedulerPage from "../pageobjects/SchedulerPage.js";
let APPOINTMENT_DATA = {startDate:"", endDate:"", subject:"", note: "", file: ""};

class AddRegularAppointment {
    async addRegularAppointment(APPOINTMENT_DATA){
        await SchedulerPage.openNewAppointment();
        await SchedulerPage.selectStartDateAndTime(APPOINTMENT_DATA.startDate);
        await SchedulerPage.selectEndDateAndTime(APPOINTMENT_DATA.endDate);
        await SchedulerPage.inputSubjectAppointment(APPOINTMENT_DATA.subject);
        await SchedulerPage.selectAttendees();
        await SchedulerPage.selectFacilities();
        await SchedulerPage.inputNotes(APPOINTMENT_DATA.note);
        await SchedulerPage.uploadAttachment(APPOINTMENT_DATA.file);
        await SchedulerPage.clickAddAppointment();
    }
    async verifyCreatedAppointment(APPOINTMENT_DATA) {
      let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
      await expect(actualResult).toEqual(APPOINTMENT_DATA.subject);
      return this;
    }
}
export default new AddRegularAppointment();