const LoginPage = require('../../pageobjects/LoginPage.js');
const EditingAppointmentFlow = require('../../test_flows/EditingAppointmentFlow.js');
const HeaderModule = require('../../pageobjects/module/HeaderModule.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {EDIT_APPOINTMENT_DATA_VALID} = require('../../test_datas/Edit_Appointment_Data.js');
const {EDIT_APPOINTMENT_DATA_INVALID} = require('../../test_datas/Edit_Appointment_Data.js');
const EVENT_ID = '90', BDATE = '2023-11-28';

describe('Edit Regular Appointment', () => {
    beforeEach('Login and Go to Edit Regular Appointment', async () => {
        await browser.url(`/g/schedule/modify.csp?event=${EVENT_ID}&bdate=${BDATE}`);
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_EditRegularAppointmentUnsuccessfullyWithDateAndTimeAreInvalid', async () => {
        await EditingAppointmentFlow.edittingRegularAppointment(EDIT_APPOINTMENT_DATA_INVALID);
        await EditingAppointmentFlow.verifyErrorMessageAddAppointment();
    });

    it('TC_02_EditRegularAppointmentSuccessfully', async () => {
        await EditingAppointmentFlow.edittingRegularAppointment(EDIT_APPOINTMENT_DATA_VALID);
        await EditingAppointmentFlow.verifyAddingAppointment(EDIT_APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout',async () => {
        await HeaderModule.logoutUser();
    });
})