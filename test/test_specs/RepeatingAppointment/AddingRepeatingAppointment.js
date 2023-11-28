const LoginPage = require('../../pageobjects/LoginPage.js');
const AddingAppointmentFlow = require('../../test_flows/AddingAppointmentFlow.js');
const HeaderModule = require('../../pageobjects/module/HeaderModule.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {APPOINTMENT_DATA_VALID} = require('../../test_datas/Add_Appointment_Data.js');
const {APPOINTMENT_DATA_INVALID} = require('../../test_datas/Add_Appointment_Data.js');


describe('Add Repeating Appointment', () => {
    beforeEach('Login and Go to New Appointment', async () => {
        await browser.url('/g/schedule/repeat_add.csp?');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Add_Repeating_Appointment_Unsuccessfully_With_Date_Time_Are_Invalid', async () => {
        await AddingAppointmentFlow.addingRepeatingAppointment(APPOINTMENT_DATA_INVALID);
        await AddingAppointmentFlow.verifyErrorMessageAddAppointment();
    });

    it('TC_02_Add_Repeating_Appointment_Successfully', async () => {
        await AddingAppointmentFlow.addingRepeatingAppointment(APPOINTMENT_DATA_VALID);
        await AddingAppointmentFlow.verifyAddingAppointment(APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout',async () => {
        await HeaderModule.logoutUser();
    });

});