var currentTime = document.getElementById('current-time');
var currentDay = document.getElementById('current-day');
var TZ_OFFSET = -720;
var getCurrentDate;
var DAYS_LIST = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];
function setDate() {
    var date = new Date();
    getCurrentDate = new Date(date.getTime() + (TZ_OFFSET + date.getTimezoneOffset()) * 60 * 1000);
    currentDay.textContent = DAYS_LIST[getCurrentDate.getDay()];
    currentTime.textContent = "".concat(getCurrentDate.getHours(), ":").concat(getCurrentDate.getMinutes());
    setDateAsync();
}
setDate();
function setDateAsync() {
    setTimeout(function () {
        setDate();
    }, 1000);
}
