var currentTime = document.getElementById('current-time');
var currentDay = document.getElementById('current-day');
var TZ_OFFSET = -720;
var getCurrentDate;

var DAYS_LIST = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];

function setDate() {
    var date = new Date(); // This function was written in TS if it looks off
    getCurrentDate = new Date(date.getTime() + (TZ_OFFSET + date.getTimezoneOffset()) * 60 * 1000);
    minToString = getCurrentDate.getMinutes().toString();
    if (minToString.length == 1) {
        currentTime.textContent = "".concat(getCurrentDate.getHours(), ":0").concat(getCurrentDate.getMinutes());
    }
    else {
        currentTime.textContent = "".concat(getCurrentDate.getHours(), ":").concat(getCurrentDate.getMinutes());
    }
    currentDay.textContent = DAYS_LIST[getCurrentDate.getDay()];
    setDateAsync();
}
setDate();
function setDateAsync() {
    setTimeout(function () {
        setDate();
    }, 1000);
}