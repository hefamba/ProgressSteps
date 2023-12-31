const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');


let activeCircle = 1;

const update = () => {
    circles.forEach((circle, idx) => {
        if (idx < activeCircle) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');

        }
    });
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if (activeCircle === 1) {
        prev.disabled = true;

    }
    else if (activeCircle === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;

    }
};

// every time the activeCircle idx change the progress will move with it.




next.addEventListener('click', () => {
    activeCircle++;
    if (activeCircle > circles.length) {
        activeCircle = circles.length;
    }
    update();

});

prev.addEventListener('click', () => {
    activeCircle--;

    if (activeCircle < 1) {
        activeCircle = 1;
    }
    update();

})







