let currentTime = document.getElementById('current-time') as HTMLElement;
let currentDay = document.getElementById('current-day') as HTMLElement;
const TZ_OFFSET:number = -720;

let getCurrentDate;
const DAYS_LIST:string[] = ['Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Saturday', 'Sunday'];

function setDate() {
    let date: Date = new Date();
    getCurrentDate = new Date(date.getTime() + (TZ_OFFSET + date.getTimezoneOffset()) * 60 * 1000);
    currentDay.textContent = DAYS_LIST[getCurrentDate.getDay()]!;
    currentTime.textContent = `${getCurrentDate.getHours()}:${getCurrentDate.getMinutes()}`;
    setDateAsync();
}
setDate();

function setDateAsync(): void {
    setTimeout(() => {
        setDate();
    }, 1000);
}
