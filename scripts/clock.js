const clock = document.querySelector('.clock');

let date = new Date();

setInterval(function() {
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);