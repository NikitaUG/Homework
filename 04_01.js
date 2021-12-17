let date = new Date();
const h1 = document.querySelector('h1');
h1.innerHTML = date.toLocaleDateString();
let y = date.getFullYear();
let m = date.getMonth();
let today = date.getDate();
let daysCount = dayInMonth(m);


generateMonth();

//дата со страницы
const SelectDate = document.querySelector('[type="date"]')
SelectDate.addEventListener('change', (event)=>{
    date = new Date(`${event.target.value}`);
    y = date.getFullYear();
    m = date.getMonth();
    today = date.getDate();
    daysCount = dayInMonth(m);
    h1.innerHTML = date.toLocaleDateString();

    generateMonth();
    })
//конец дата со страницы



function generateMonth(){
            
        const screenMonth = [];
        for (let i = 0; i < daysCount; i++){
            let DateWithDay = new Date(y, m, (i+1)).getDay();
            if((i+1) === today){
                screenMonth.push(`<div class="box month_in today">${i+1}</div>`);
            } else if(DateWithDay === 0 || DateWithDay === 6) {
                screenMonth.push(`<div class="box month_in weekend">${i+1}</div>`);
            } 
            else {
                screenMonth.push(`<div class="box month_in">${i+1}</div>`);
            }
        }


        // предыдущий месяц
        let previousMonth = dayOfWeek (m);
            if (previousMonth === 0) {
                previousMonth = 6;
            } else{previousMonth --}
        let dayInPreviousMonth = dayInMonth(m-1);

        for (let i = previousMonth; i > 0; i--){
            if (i == 6){
                screenMonth.unshift(`<div class="box month_out weekend">${dayInPreviousMonth}</div>`);
                }else{
                    screenMonth.unshift(`<div class="box month_out">${dayInPreviousMonth}</div>`);
            }
            dayInPreviousMonth --;
        }
        // конец предыдущий месяц


        // следующий месяц
        const lastDateDay = dayOfWeek(m+1);
        let nextMonthDays = 1;

        for (let i = lastDateDay; i <8; i++){
            if (i === 0 || i === 6 || i === 7){
                screenMonth.push(`<div class="box month_out weekend">${nextMonthDays}</div>`);
            }else{
                screenMonth.push(`<div class="box month_out">${nextMonthDays}</div>`);
            }
            nextMonthDays ++;
        }
        // конец следующий месяц


        const container = document.querySelector('.container');
        container.innerHTML = screenMonth.join('');
}



function dayInMonth (m){
    let daysCount = new Date(y, (m+1), 0).getDate();
    return daysCount;
}

function dayOfWeek (m, day = 1) {
    let firstDay = new Date(y, m, day).getDay();
    return firstDay;
}