const LoginPage = require('../../pageobjects/LoginPage.js');
const AddAllDayAppointmentFlow = require('../../test_flows/AllDayAppointmentFlow/AddAllDayAppointmentFlow.js');
const LogoutPage = require('../../pageobjects/LogoutPage.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {APPOINTMENT_DATA_INVALID} = require('../../test_datas/Add_Appointment_Data.js');
const {APPOINTMENT_DATA_VALID} = require('../../test_datas/Add_Appointment_Data.js');
const allureReporter =  require('@wdio/allure-reporter').default;

describe('Add All Day Appointment', () => {
    beforeEach('Login and go to All Day Appointment',async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/banner_add.csp?');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Add_All_Day_Appointment_Unsuccessfully_With_Date_Is_Invalid',async () => {
        allureReporter.addFeature('Add All Day Appointment');
        allureReporter.addDescription('Add_All_Day_Unsuccessfully_With_Date_Is_Invalid');
        await AddAllDayAppointmentFlow.addAllDayAppointmentUnsuccessfullyWithEndDateInvalid(APPOINTMENT_DATA_INVALID);
    });

    it('TC_02_Add_All_Day_Appointment_Unsuccessfully_With_Attendees_Are_Empty',async () => {
        allureReporter.addFeature('Add All Day Appointment');
        allureReporter.addDescription('Add_All_Day_Unsuccessfully_With_Attenddes_Are_Empty');
        await AddAllDayAppointmentFlow.addAllDayAppointmentUnsuccessfullyWithAttendeesIsEmpty(APPOINTMENT_DATA_VALID);
    });

    it('TC_03_Add_All_Day_Appointment_Successfully', async () => {
        allureReporter.addFeature('Add All Day Appointment');
        allureReporter.addDescription('Add_All_Day_Successfully');
        await AddAllDayAppointmentFlow.addAllDayAppointmentSuccessfully(APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout username', async () => {
        await LogoutPage.logoutUser();
    });
});