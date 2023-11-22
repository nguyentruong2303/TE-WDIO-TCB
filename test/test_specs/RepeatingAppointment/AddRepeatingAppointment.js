const LoginPage = require('../../pageobjects/LoginPage.js');
const AddRepeatingAppointmentFlow = require('../../test_flows/RePeatingAppointmentFlow/AddRepeatingAppointmentFlow.js');
const LogoutPage = require('../../pageobjects/LogoutPage.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {APPOINTMENT_DATA_VALID} = require('../../test_datas/Add_Appointment_Data.js');
const {APPOINTMENT_DATA_INVALID} = require('../../test_datas/Add_Appointment_Data.js');
const allureReporter =  require('@wdio/allure-reporter').default;


describe('Add Repeating Appointment', () => {
    beforeEach('Login and Go to New Appointment', async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/repeat_add.csp?');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Add_Repeating_Appointment_Unsuccessfully_With_Date_Time_Are_Invalid', async () => {
        allureReporter.addFeature('Add Repeating Appointment');
        allureReporter.addDescription('Add_Repeating_Appointment_Unsuccessfully_With_Date_Is_Invalid');
        await AddRepeatingAppointmentFlow.addRepeatingAppointmentUnsuccessfullyWithDateAndTimeAreInvalid(APPOINTMENT_DATA_INVALID);
    });

    it('TC_02_Add_Repeating_Appointment_Unsuccessfully_With_Attendees_Are_Invalid', async () => {
        allureReporter.addFeature('Add Repeating Appointment');
        allureReporter.addDescription('Add_Repeating_Appointment_Unsuccessfully_With_Attendees_Are_Empty');
        await AddRepeatingAppointmentFlow.addRepeatingAppointmentUnsuccessfullyWithAttendeesAreEmpty(APPOINTMENT_DATA_VALID);
    });
    
    it('TC_03_Add_Repeating_Appointment_Successfully', async () => {
        allureReporter.addFeature('Add Repeating Appointment');
        allureReporter.addDescription('Add_Repeating_Appointment_Successfully');
        await AddRepeatingAppointmentFlow.addRepeatingAppointmentSuccessfully(APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout',async () => {
        await LogoutPage.logoutUser();
    });

});