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
};



next.addEventListener('click', () => {
    activeCircle++;
    if (activeCircle > circles.length) {
        activeCircle = circles.length;
    }
    update();
    console.log(activeCircle);
});

prev.addEventListener('click', () => {
    activeCircle--;

    if (activeCircle < 1) {
        activeCircle = 1;
    }
    update();
    console.log(activeCircle);
})





