let currentTime = document.getElementById('current-time');
let currentDay = document.getElementById('current-day');
const TZ_OFFSET = -720;
let dstOffset;
let isDaylightSavings;
let getCurrentDate;

const DAYS_LIST = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];

setDate();
function checkDST(getCurrentDate) {
    if ( // date is between septemper and april?
        getCurrentDate.getMonth() <= 8 ||
        getCurrentDate.getMonth() <= 3
        ) {
        if ( // date < 26th && month = september && day != sunday?
            getCurrentDate.getDate() <= 25 &&
            getCurrentDate.getMonth() == 8 &&
            getCurrentDate.getDay() != 0
        ) {
            dstOffset = 0;
        }
        else if (
            getCurrentDate.getDate() = 7 &&
            getCurrentDate.getMonth() == 3 &&
            getCurrentDate.getDay() != 0
        ) {
            dstOffset = 0;
        }
    }
    else {
        dstOffset = 3600 / 60; // DST difference
        console.log('h');
    }
}
function setDate() {
    let date = new Date(); 
    let getCurrentDate = new Date(date.getTime() + (TZ_OFFSET + dstOffset + date.getTimezoneOffset()) * 60 * 1000);
    let minToString = getCurrentDate.getMinutes().toString();
    checkDST(getCurrentDate);
    if (minToString.length == 1) {
        currentTime.textContent = "".concat(getCurrentDate.getHours(), ":0").concat(getCurrentDate.getMinutes());
    }
    else {
        currentTime.textContent = "".concat(getCurrentDate.getHours(), ":").concat(getCurrentDate.getMinutes());
    }
    currentDay.textContent = DAYS_LIST[getCurrentDate.getDay()];
    setDateAsync();
}
function setDateAsync() {
    setTimeout(function () {
        setDate();
    }, 1000);
}