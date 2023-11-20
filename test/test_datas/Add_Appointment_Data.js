exports.APPOINTMENT_DATA_VALID = {
    startDate: {
        year: "2023",
        month: "Nov",
        day: "20(Mon)"
    },
    startTime: {
        hour: "9",
        minute: "00" 
    },

    endDate: {
        year: "2023",
        month: "Nov",
        day: "20(Mon)"
    },
    endTime: {
        hour: "10",
        minute: "00" 
    },

    subject: "Appointment 1",
    note: "This is note",
    file: "../TOPIC3_WDIO/test/screenshot/screenshot.png"
};

exports.APPOINTMENT_DATA_INVALID = {
    startDate: {
        year: "2023",
        month: "Nov",
        day: "21(Tue)"
    },
    startTime: {
        hour: "9",
        minute: "00" 
    },

    endDate: {
        year: "2023",
        month: "Nov",
        day: "19(Sun)"
    },
    endTime: {
        hour: "8",
        minute: "00" 
    },

    subject: "Appointment 1",
    note: "This is note",
    file: "../TOPIC3_WDIO/test/screenshot/screenshot.png"
};


