function codeBars() {
    let x = document.querySelectorAll('[class^="gg-symbol--gradient"],[class*=" gg-symbol--gradient"]');
    x.forEach(getRandomColors);
}

function getRandomColors(item) {
    let y = Math.floor(Math.random() * 3);

    if (y == 0) {
        item.style.background = "linear-gradient(90deg, rgb(242, 159, 255) 0%, rgb(124, 153, 255) 100%)"
    } else if (y == 1) {
        item.style.background = "linear-gradient(90deg, rgb(100, 145, 214) 0%, rgb(67, 240, 199) 100%)"
    } else {
        item.style.background = "linear-gradient(90deg, rgb(255, 218, 122) 0%, rgb(255, 105, 105) 100%)"
    }
}