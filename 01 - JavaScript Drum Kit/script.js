function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    let keyCode;
    if (e.key) {
        keyCode = e.keyCode;
    } else {
        keyCode = e.currentTarget.dataset.key;
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
keys.forEach((key) => key.addEventListener('click', playSound));
window.addEventListener('keydown', playSound);
