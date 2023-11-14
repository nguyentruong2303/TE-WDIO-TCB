import SchedulerPage from "../pageobjects/SchedulerPage.js";
const EDIT_APPOINTMENT = {startDate:"", endDate:"", subject:"", note:""};

class EditRegularAppointment {
    async editRegularAppointment(EDIT_APPOINTMENT) {
        await SchedulerPage.openEditAppointment();
        await SchedulerPage.selectStartDateAndTime(EDIT_APPOINTMENT.startDate);
        await SchedulerPage.selectEndDateAndTime(EDIT_APPOINTMENT.endDate);
        await SchedulerPage.inputSubjectAppointment(EDIT_APPOINTMENT.subject);
        await SchedulerPage.inputNotes(EDIT_APPOINTMENT.note);
        await SchedulerPage.clickAddAppointment();
    }
    async verifyTheAppointmentIsUpdate(EDIT_APPOINTMENT) {
        let actualResult =  await SchedulerPage.getSubjectOfAppointmentDetail();
      await expect(actualResult).toEqual(EDIT_APPOINTMENT.subject);
      return this;
    }
}
export default new EditRegularAppointment();