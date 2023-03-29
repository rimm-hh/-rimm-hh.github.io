window.addEventListener('load', function () {
    document.querySelector(".read-more-text--1").style.display = 'none';
    document.querySelector(".read-less-4-4--1-back").style.display = 'none';
    document.querySelector(".read-more-text--2").style.display = 'none';
    document.querySelector(".read-less-4-4--2-back").style.display = 'none';
    document.querySelector(".read-more-text--3").style.display = 'none';
    document.querySelector(".read-less-4-4--3-back").style.display = 'none';
})

// 

document.querySelector(".read-more-main-4-4--1").onclick = function () {
    document.querySelector(".read-more-text--1").style.display = 'block';
    document.querySelector(".read-less-4-4--1-back").style.display = 'flex';

    document.querySelector(".container-main-4-4--box--1-mini-text").style.display = 'none';
    document.querySelector(".read-more-main-4-4--1-back").style.display = 'none';
}
document.querySelector(".read-less-4-4--1").onclick = function () {
    document.querySelector(".read-more-text--1").style.display = 'none';
    document.querySelector(".read-less-4-4--1-back").style.display = 'none';

    document.querySelector(".container-main-4-4--box--1-mini-text").style.display = 'block';
    document.querySelector(".read-more-main-4-4--1-back").style.display = 'flex';
}

document.querySelector(".read-more-main-4-4--2").onclick = function () {
    document.querySelector(".read-more-text--2").style.display = 'block';
    document.querySelector(".read-less-4-4--2-back").style.display = 'flex';

    document.querySelector(".container-main-4-4--box--2-mini-text").style.display = 'none';
    document.querySelector(".read-more-main-4-4--2-back").style.display = 'none';
}
document.querySelector(".read-less-4-4--2").onclick = function () {
    document.querySelector(".read-more-text--2").style.display = 'none';
    document.querySelector(".read-less-4-4--2-back").style.display = 'none';

    document.querySelector(".container-main-4-4--box--2-mini-text").style.display = 'block';
    document.querySelector(".read-more-main-4-4--2-back").style.display = 'flex';
}

document.querySelector(".read-more-main-4-4--3").onclick = function () {
    document.querySelector(".read-more-text--3").style.display = 'block';
    document.querySelector(".read-less-4-4--3-back").style.display = 'flex';

    document.querySelector(".container-main-4-4--box--3-mini-text").style.display = 'none';
    document.querySelector(".read-more-main-4-4--3-back").style.display = 'none';
}
document.querySelector(".read-less-4-4--3").onclick = function () {
    document.querySelector(".read-more-text--3").style.display = 'none';
    document.querySelector(".read-less-4-4--3-back").style.display = 'none';

    document.querySelector(".container-main-4-4--box--3-mini-text").style.display = 'block';
    document.querySelector(".read-more-main-4-4--3-back").style.display = 'flex';
}