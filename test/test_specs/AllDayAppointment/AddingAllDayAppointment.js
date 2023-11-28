const LoginPage = require('../../pageobjects/LoginPage.js');
const AddingAppointmentFlow = require('../../test_flows/AddingAppointmentFlow.js');
const HeaderModule = require('../../pageobjects/module/HeaderModule.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {APPOINTMENT_DATA_INVALID} = require('../../test_datas/Add_Appointment_Data.js');
const {APPOINTMENT_DATA_VALID} = require('../../test_datas/Add_Appointment_Data.js');

describe('Add All Day Appointment', () => {
    beforeEach('Login and go to All Day Appointment',async () => {
        await browser.url('/g/schedule/banner_add.csp?');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Add_All_Day_Appointment_Unsuccessfully_With_Date_Is_Invalid',async () => {
        await AddingAppointmentFlow.addingAllDayAppointment(APPOINTMENT_DATA_INVALID);
        await AddingAppointmentFlow.verifyErrorMessageAddAppointment();
    });

    it('TC_02_Add_All_Day_Appointment_Successfully', async () => {
        await AddingAppointmentFlow.addingAllDayAppointment(APPOINTMENT_DATA_VALID);
        await AddingAppointmentFlow.verifyAddingAppointment(APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout username', async () => {
        await HeaderModule.logoutUser();
    });
});