let ORIGINAL_NUMBER = 0;
let GENERATE_BTN = document.querySelector('#generate-num-btn');
let CHECK_BTN = document.querySelector('#check-guess-btn');
let MIN_BOX = document.querySelector('#min');
let MAX_BOX = document.querySelector('#max');
let GUESS_AREA = document.querySelector('.guess-area');

function generateNum() {
    let min = Number(MIN_BOX);
    let max = Number(MAX_BOX);
    
    let difference = max - min;
    
    ORIGINAL_NUMBER = Math.round(Math.random() * difference) + min;

    GENERATE_BTN.disabled = true;
    GUESS_AREA.style.display = 'block';
}

function checkGuess() {
    let guess = Number(document.querySelector('#guess').value);
    let message = document.querySelector('#message');
    let chances = document.querySelector('#left-count');
    
    if (!guess) {
        message.innerText = "Please only enter a number in guess";
        message.style.color = 'red';
    } else if (guess == ORIGINAL_NUMBER) {
        message.innerText = "Congratulations you've guessed it";
        message.style.color = 'green';
    } else {
        if (ORIGINAL_NUMBER - guess) {
            message.innerText = "Very nice guess. You are too close. Try again!";
            message.style.color = 'blue';
            chances.innerText = Number(chances.innerText--);
            tryAnother.style.display = 'block';
            CHECK_BTN.disabled = true;
        }
    }
}

function reActivate() {
    CHECK_BTN.disabled = false;
    GENERATE_BTN.disabled = false;
    MIN_BOX.value = '';
    MAX_BOX.value = '';
    GUESS_AREA.style.display = 'none';
}