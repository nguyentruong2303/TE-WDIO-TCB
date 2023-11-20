const LoginPage = require('../../pageobjects/LoginPage.js');
const SchedulerPage = require('../../pageobjects/SchedulerPage.js');
const EditRegularAppointmentFlow = require('../../test_flows/RegularAppointmentFlow/EditRegularAppointmentFlow.js');
const LogoutPage = require('../../pageobjects/LogoutPage.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {APPOINTMENT_DATA_VALID} = require('../../test_datas/Add_Appointment_Data.js');
const {EDIT_APPOINTMENT_DATA_VALID} = require('../../test_datas/Edit_Appointment_Data.js');
const {EDIT_APPOINTMENT_DATA_INVALID} = require('../../test_datas/Edit_Appointment_Data.js');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Edit Regular Appointment', () => {
    beforeEach('Login and Go to Edit Regular Appointment', async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/modify.csp?event=36&bdate=2023-11-20');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_EditRegularAppointmentUnsuccessfullyWithDateAndTimeAreInvalid', async () => {
        allureReporter.addFeature('Edit Regular Appointment');
        allureReporter.addDescription('Edit Regular Appointment Unsuccessfully With Date And Time Are Invalid');
        await EditRegularAppointmentFlow.editRegularAppointmentUnsuccessWithDateAndTimeAreInvalid(EDIT_APPOINTMENT_DATA_INVALID);
    });

    it('TC_02_EditRegularAppointmentUnsuccessfullyWithAttendeesAreEmpty', async () => {
        allureReporter.addFeature('Edit Regular Appointment');
        allureReporter.addDescription('Edit Regular Appointment Unsuccessfully With Attendees Are Empty');
        await EditRegularAppointmentFlow.editRegularAppointmentUnsuccessWithAttendeesAreEmpty();
    });

    it('TC_02_EditRegularAppointmentSuccessfully', async () => {
        allureReporter.addFeature('Edit Regular Appointment');
        allureReporter.addDescription('Edit Regular Appointment Successfully');
        await EditRegularAppointmentFlow.editRegularAppointmentSuccess(EDIT_APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout',async () => {
        await LogoutPage.logoutUser();
    });




})