const date = new Date();
const h1 = document.querySelector('h1');
h1.innerHTML = date.toLocaleDateString();
const y = date.getFullYear();
const m = date.getMonth();






const previousMonth = dayOfWeek ()-1;
const dayInPreviousMonth = dayInMonth(m-1);

const screenMonth = [];

for (let i = 0; i < previousMonth; i++){
    screenMonth.unshift(`<div class="box month_out">${dayInPreviousMonth-i}</div>`)
}

const daysCount = dayInMonth(m);
for (let i = 0; i < daysCount; i++){
    screenMonth.push(`<div class="box month_in">${i+1}</div>`);
}

let lastDateDay = screenMonth.length%7;
console.log('последний день месяца', lastDateDay)

let nextMonth = 1;
for (let i = lastDateDay; i <7; i++){
    screenMonth.push(`<div class="box month_out">${nextMonth}</div>`);
    nextMonth ++;
}



const container = document.querySelector('.container');
container.innerHTML = screenMonth.join('');



function dayInMonth (m){
    let daysCount = new Date(y, (m+1), 0).getDate();
    return daysCount;
}

function dayOfWeek () {
    let firstDay = new Date(y, m, 01).getDay();
    return firstDay;
}