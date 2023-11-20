const LoginPage = require('../../pageobjects/LoginPage.js');
const EditAllDayAppointmentFlow = require('../../test_flows/AllDayAppointmentFlow/EditAllDayAppointmentFlow.js');
const LogoutPage = require('../../pageobjects/LogoutPage.js');
const {VALID_LOGIN} = require('../../test_datas/Login_Data.js');
const {EDIT_APPOINTMENT_DATA_VALID} = require('../../test_datas/Edit_Appointment_Data.js');
const {EDIT_APPOINTMENT_DATA_INVALID} = require('../../test_datas/Edit_Appointment_Data.js');
const allureReporter =  require('@wdio/allure-reporter').default;

describe('Edit All Day Appointment', () => {
    beforeEach('Login and Edit All Day Appointment',async () => {
        await browser.url('https://truong-nguyen-1.cybozu-dev.com/g/schedule/banner_modify.csp?event=37&bdate=2023-11-20');
        await LoginPage.loginToGaroonWithCredentials(VALID_LOGIN);
    });

    it('TC_01_Edit_All_Day_Appointment_Unsuccessfully_With_Date_Is_Invalid',async () => {
        allureReporter.addFeature('Edit All Day Appointment');
        allureReporter.addDescription('Add_Edit_Day_Unsuccessfully_With_Date_Is_Invalid');
        await EditAllDayAppointmentFlow.editAllDayAppointmentUnsuccessWithDateIsInvalid(EDIT_APPOINTMENT_DATA_INVALID);
    });

    it('TC_02_Edit_All_Day_Appointment_Unsuccessfully_With_Attendees_Are_Empty',async () => {
        allureReporter.addFeature('Edit All Day Appointment');
        allureReporter.addDescription('Edit_All_Day_Unsuccessfully_With_Attenddes_Are_Empty');
        await EditAllDayAppointmentFlow.editRegularAppointmentUnsuccessWithAttendeesAreEmpty();
    });

    it('TC_03_Edit_All_Day_Appointment_Successfully', async () => {
        allureReporter.addFeature('Edit All Day Appointment');
        allureReporter.addDescription('Edit_All_Day_Successfully');
        await EditAllDayAppointmentFlow.editRegularAppointmentSuccess(EDIT_APPOINTMENT_DATA_VALID);
    });

    afterEach('Logout username', async () => {
        await LogoutPage.logoutUser();
    });
});