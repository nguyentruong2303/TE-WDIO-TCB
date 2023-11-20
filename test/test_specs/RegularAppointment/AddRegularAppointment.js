const LoginPage = require('../../pageobjects/LoginPage.js');
const AddRegularAppointmentFlow = require('../../test_flows/RegularAppointmentFlow/AddRegularAppointmentFlow.js');
const LogoutPage = require('../../pageobjects/LogoutPage.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {APPOINTMENT_DATA_INVALID} = require('../../test_datas/Add_Appointment_Data.js');
const {APPOINTMENT_DATA_VALID} = require('../../test_datas/Add_Appointment_Data.js');
const allureReporter =  require('@wdio/allure-reporter').default;


describe('Add Regular Appointment', () => {
    beforeEach('Login and Go to New Appointment Screen', async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/add.csp?');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Add_Appointment_With_Date_And_Time_Are_Invalid', async () => {
        allureReporter.addFeature('Add Regular Appointment');
        allureReporter.addDescription('Add_Regular_Appointment_Unsuccessfully_With_Date_Is_Invalid');
        await AddRegularAppointmentFlow.addRegularAppointmentUnSuccessfullyWithDateAndTimeAreInvalid(APPOINTMENT_DATA_INVALID);
    });
    it('TC_02_Add_Appointment_With_Attendees_Are_Empty', async () => {
        allureReporter.addFeature('Add Regular Appointment');
        allureReporter.addDescription('Add_Regular_Appointment_Unsuccessfully_With_Attendees_Are_Empty');
        await AddRegularAppointmentFlow.addRegularAppointmentUnSuccessfullyWithAttendeesEmpty(APPOINTMENT_DATA_VALID);
    });
    it('TC_03_Add_Appointment_Successfully', async () => {
        allureReporter.addFeature('Add Regular Appointment');
        allureReporter.addDescription('Add_Regular_Appointment_Successfully');
        await AddRegularAppointmentFlow.addRegularAppointmentSuccessfully(APPOINTMENT_DATA_VALID);
    });
    afterEach('Logout',async () => {
        await LogoutPage.logoutUser();
    });

});