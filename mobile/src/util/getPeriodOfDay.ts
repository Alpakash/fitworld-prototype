export const getPeriodOfDay = () => {
    const hours = new Date().getHours();

    return "Afternoon";

    // // morning
    // if (hours >= 6 && hours < 12) {
    //     return "Morning";
    // }
    // // midday
    // if (hours >= 18 && hours < 23 || (hours >= 0 && hours < 6)) {
    //     return "Afternoon";
    // }
    // // evening
    // if ((hours >= 23) ||) {
    //     return "Evening"
    // }
};
