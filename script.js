const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let activeCircle = 1;

next.addEventListener('click', () => {
    activeCircle++;
    circles.forEach((circle, idx) => {
        if (idx < activeCircle) {
            circle.classList.add('active');
        }
    });

    if (activeCircle > circles.length)

    console.log(activeCircle);

});

prev.addEventListener('click', () => {
    activeCircle--;
    circles.forEach((circle, idx) => {
        if (idx > activeCircle) {
            circle.classList.remove('active');
        }

    });
    console.log(activeCircle);
})





