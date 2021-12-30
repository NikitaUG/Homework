const r = document.querySelector('[data-red] + input');
const rCircle = document.querySelector('[data-red]');
const y = document.querySelector('[data-yellow] + input');
const yCircle = document.querySelector('[data-yellow]');
const g = document.querySelector('[data-green] + input');
const gCircle = document.querySelector('[data-green]');

const totalTime = document.querySelector('[data-total-time] > input');
const baseConst = 40;

let lenRed = 40;
let lenYellow = 40;
let lenGreen = 40;
let len = totalTime.value;

function calculateOdds(val, a, b, c) {
    let valMinusLenHalf = (totalTime.value * 1.2 - val) / 2;

    a.value = val.toFixed(1);
    b.value = c.value = valMinusLenHalf.toFixed(1);
}

function addAnimation(val, setColor = 'RED_K', allTime = len) {
    let lenValMinusLenHalf = (allTime * 1.2 - val) / 2 * 10;
    let lenValue = (val / allTime) * 100;

    if (setColor === 'RED_K') {
        calculateOdds(val, r, y, g);
        lenRed = lenValue;
        lenYellow = lenGreen = lenValMinusLenHalf;

    } else if (setColor === 'YELLOW_K') {
        calculateOdds(val, y, r, g);

        lenYellow = lenValue;
        lenRed = lenGreen = lenValMinusLenHalf;

    } else if (setColor === 'GREEN_K') {
        calculateOdds(val, g, y, r);

        lenGreen = lenValue;
        lenYellow = lenRed = lenValMinusLenHalf;

    } else if (setColor === 'totalTime') {
        lenRed = lenYellow = lenGreen = baseConst;
        r.value = y.value = g.value = (allTime * 1.2 / 3).toFixed(1);
    }

    //новые значения анимации
    rCircle.style.animation = `_red ${allTime}s step-end infinite`;
    yCircle.style.animation = `_yellow ${allTime}s step-end infinite`;
    gCircle.style.animation = `_green ${allTime}s step-end infinite`;
    newKeyFrame();

}
addAnimation(4, 'RED_K');
newKeyFrame();





function validationInputValue(event) {
    let val = +(event.target.value.replace(/[^\d]/g, ''));
    event.target.value = val; // меняет на фронте значение в поле инпут
    if (parseInt(val) < parseInt(len)) {
        return val;
    } else {
        val = len - 1;
        return val;
    }

}

function validationInputTotalTime(event) {
    let val = +(event.target.value.replace(/[^\d]/g, ''));
    event.target.value = val; // меняет на фронте значение в поле инпут
    return val;
}


r.addEventListener('input', (event) => {
    addAnimation(validationInputValue(event), 'RED_K')
})


y.addEventListener('input', (event) => {
    addAnimation(validationInputValue(event), 'YELLOW_K')
})

g.addEventListener('input', (event) => {
    addAnimation(validationInputValue(event), 'GREEN_K')
})

totalTime.addEventListener('input', (event) => {
    addAnimation(null, 'totalTime', validationInputTotalTime(event))
})
