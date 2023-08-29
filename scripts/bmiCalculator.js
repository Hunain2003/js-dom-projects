const form = document.querySelector('#bmi-form');

form.addEventListener('click', e => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const height = inputs[0].value;
    const weight = inputs[1].value;
    const answer = weight / ((height * height) / 10000).toFixed(2);

    const result = document.querySelector('result');

    if (isNaN(answer) || !answer) {
        result.innerText = `Please give valid inputs`;
        result.style.color = 'red';
    } else {
        result.innerText = `Result: ${answer}`;
        result.style.color = 'green';
    }
})