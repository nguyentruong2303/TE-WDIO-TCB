const WELCOME_MSG_SLASH = 'div.welcome-message-slash>div';


class ServicesPage {

    async getWelcomeMSGSlash() {
    await $(WELCOME_MSG_SLASH);
    
    }

}

export default new ServicesPage();