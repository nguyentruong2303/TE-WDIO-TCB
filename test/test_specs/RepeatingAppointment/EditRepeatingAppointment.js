const LoginPage = require('../../pageobjects/LoginPage.js');
const EditRepeatingAppointmentFlow = require('../../test_flows/RePeatingAppointmentFlow/EditRepeatingAppointmentFlow.js');
const LogoutPage = require('../../pageobjects/LogoutPage.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {EDIT_APPOINTMENT_DATA_VALID} = require('../../test_datas/Edit_Appointment_Data.js');
const {EDIT_APPOINTMENT_DATA_INVALID} = require('../../test_datas/Edit_Appointment_Data.js');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Edit Repeating Appointment', () => {
    beforeEach('Login and Go to Edit Repeating Appointment', async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/repeat_modify.csp?event=46&bdate=2023-11-20');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_EditRepeatingAppointmentUnsuccessfullyWithDateAndTimeAreInvalid', async () => {
        allureReporter.addFeature('Edit Repeating Appointment');
        allureReporter.addDescription('Edit Repeating Appointment Unsuccessfully With Date And Time Are Invalid');
        await EditRepeatingAppointmentFlow.editRepeatingAppointmentUnsuccessWithDateAndTimeAreInvalid(EDIT_APPOINTMENT_DATA_INVALID);
    });

    it('TC_02_EditRepeatingAppointmentUnsuccessfullyWithAttendeesAreEmpty', async () => {
        allureReporter.addFeature('Edit Repeating Appointment');
        allureReporter.addDescription('Edit Repeating Appointment Unsuccessfully With Attendees Are Empty');
        await EditRepeatingAppointmentFlow.editRepeatingAppointmentUnsuccessWithAttendeesAreEmpty();
    });

    it('TC_03_EditRepeatingAppointmentSuccessfully', async () => {
        allureReporter.addFeature('Edit Repeating Appointment');
        allureReporter.addDescription('Edit Repeating Appointment Successfully');
        await EditRepeatingAppointmentFlow.editRepeatingAppointmentSuccess(EDIT_APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout',async () => {
        await LogoutPage.logoutUser();
    });




})