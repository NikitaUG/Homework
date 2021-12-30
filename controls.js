document.querySelector('[name="control"]').addEventListener('click', (e) => {
    const isHidden = e.target.checked;
    HideControls(isHidden);
});

document.querySelector('[name="pause"]').addEventListener('click', (e) => {
    const isHidden = e.target.checked;
    if (isHidden) {
        rCircle.style.animationPlayState = yCircle.style.animationPlayState = gCircle.style.animationPlayState = 'paused';
        document.querySelector('[name="control"]').disabled = true;
        PauseControls(true);
    } else {
        rCircle.style.animationPlayState = yCircle.style.animationPlayState = gCircle.style.animationPlayState = 'running';
        document.querySelector('[name="control"]').disabled = false;
        PauseControls(false);
    }

});

document.querySelector('select').addEventListener('change', (e) => {
    if (e.target.value === 'off') {
        rCircle.style.animation = gCircle.style.animation = ``;
        rCircle.style.backgroundColor = gCircle.style.backgroundColor = 'grey';
        yCircle.style.animation = `_yellow_default ${2}s step-end infinite`;
        document.querySelector('[name="control"]').disabled = true;
        HideControls();
    } else {
        addAnimation(4, 'RED_K');
        HideControls(false);
        document.querySelector('[name="control"]').disabled = false;
    }
})

function HideControls(isHidden = true) {

    document.querySelectorAll('[type="number"]').forEach(e => {
        e.style.display = isHidden ? 'none' : 'block';
    });
}

function PauseControls(isHidden = true) {

    document.querySelectorAll('[type="number"]').forEach(e => {
        e.disabled = isHidden ? true : false;

    });
}