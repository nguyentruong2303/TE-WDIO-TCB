const HEADER_USER_PROFILE_DDL = ".cloudHeader-userProfile-grn";
const HEADER_LOGOUT_LINK = "#com-header-logout-link";

class LogoutPage {
    async logoutUser() {
        await $(HEADER_USER_PROFILE_DDL).click();
        await $(HEADER_LOGOUT_LINK).click();
    };

}
module.exports = new LogoutPage();