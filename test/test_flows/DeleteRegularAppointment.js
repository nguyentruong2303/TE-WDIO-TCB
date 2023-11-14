import SchedulerPage from "../pageobjects/SchedulerPage.js";
class DeleteRegularAppointment {
    async deleteRegularAppointment() {
        await SchedulerPage.deleteAppointment();
        await SchedulerPage.verifyDeletedAppointment();
    }
}
export default new DeleteRegularAppointment();