let body = document.getElementsByTagName('body')[0];

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => {
    body.style.background = button.className;
    body.style.color = 'whitesmoke';
}));