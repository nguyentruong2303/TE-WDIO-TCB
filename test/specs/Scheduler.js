import SchedulerPage from "../pageobjects/SchedulerPage.js";
import LoginPage from "../pageobjects/LoginPage.js";
import DashBoardPage from "../pageobjects/DashBoardPage.js";
import AppMenuHeader from "../pageobjects/AppMenuHeader.js";
import AddRegularAppointment from "../test_flows/AddRegularAppointment.js";
import EditRegularAppointment from "../test_flows/EditRegularAppointment.js";
import DeleteRegularAppointment from "../test_flows/DeleteRegularAppointment.js";
import { REGULAR_APPOINTMENT_DATA } from "../test_datas/Add_Regular_Appointment.js";
import { VALID_LOGIN } from "../test_datas/Login.js";
import { REGULAR_APPOINTMENT_DATA_EDIT } from "../test_datas/Edit_Regular_Appointment.js";

describe('Scheduler', () => {
    before('Open browser and go to New Appointment screen',async () => {
        await browser.maximizeWindow();
        await LoginPage.open('https://truong-nguyen-1.cybozu-dev.com');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
        await DashBoardPage.closeNotifierCybozu();
        await DashBoardPage.openGaroonService();
        await AppMenuHeader.clickOnAppMenu('Scheduler');
    });

    it('Add New Appointment Successfully', async () => {
        await AddRegularAppointment.addRegularAppointment(REGULAR_APPOINTMENT_DATA);
        await AddRegularAppointment.verifyCreatedAppointment(REGULAR_APPOINTMENT_DATA);
    });

    it('Edit Appointment Successfully', async () => {
        await EditRegularAppointment.editRegularAppointment(REGULAR_APPOINTMENT_DATA_EDIT);
        await EditRegularAppointment.verifyTheAppointmentIsUpdate(REGULAR_APPOINTMENT_DATA_EDIT);
    });

    it('Delete Appointment Successfully', async () => {
        await DeleteRegularAppointment.deleteRegularAppointment();
    })
});