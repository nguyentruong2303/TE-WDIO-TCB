const LoginPage = require('../../pageobjects/LoginPage.js');
const EditingAppointmentFlow = require('../../test_flows/EditingAppointmentFlow.js');
const HeaderModule = require('../../pageobjects/module/HeaderModule.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {EDIT_APPOINTMENT_DATA_VALID} = require('../../test_datas/Edit_Appointment_Data.js');
const {EDIT_APPOINTMENT_DATA_INVALID} = require('../../test_datas/Edit_Appointment_Data.js');
const EVENT_ID = '91', BDATE = '2023-11-28';

describe('Edit All Day Appointment', () => {
    beforeEach('Login and Edit All Day Appointment',async () => {
        await browser.url(`/g/schedule/banner_modify.csp?event=${EVENT_ID}&bdate=${BDATE}`);
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Edit_All_Day_Appointment_Unsuccessfully_With_Date_Is_Invalid',async () => {
        await EditingAppointmentFlow.edittingAllDayAppointment(EDIT_APPOINTMENT_DATA_INVALID);
        await EditingAppointmentFlow.verifyErrorMessageAddAppointment();
    });

    it('TC_02_Edit_All_Day_Appointment_Successfully', async () => {
        await EditingAppointmentFlow.edittingAllDayAppointment(EDIT_APPOINTMENT_DATA_VALID);
        await EditingAppointmentFlow.verifyAddingAppointment(EDIT_APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout username', async () => {
        await HeaderModule.logoutUser();
    });
});