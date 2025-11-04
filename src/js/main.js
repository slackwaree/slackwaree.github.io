let currentTime = document.getElementById('current-time');
let currentDay = document.getElementById('current-day');
let dstOffset = 0;
let isDaylightSavings;
const TZ_OFFSET = -720;

const DAYS_LIST = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];


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
    }
};
function setDate() {
    let date = new Date(); 
    let getCurrentDate = new Date;
    checkDST(date);
    getCurrentDate + TZ_OFFSET + dstOffset + date.getTimezoneOffset() * 60 * 1000;  // add dst difference to getCurrentDate
    let minToString = getCurrentDate.getMinutes().toString();
    if (minToString.length == 1) {
        currentTime.textContent = `${getCurrentDate.getHours()}:0${getCurrentDate.getMinutes()}`;
    }
    else {
        currentTime.textContent = `${getCurrentDate.getHours()}:${getCurrentDate.getMinutes()}`;
    }
    currentDay.textContent = DAYS_LIST[getCurrentDate.getDay()];
    
    setDateAsync();
};
function setDateAsync() {
    setTimeout(function () {
        setDate();
    }, 1000);
}
window.addEventListener('load', setDate());