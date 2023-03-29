window.addEventListener('load', function () {
    document.querySelector(".p-2-1").style.display = 'none';
    document.querySelector(".container-main-bottom-1-read-less").style.display = 'none';
    document.querySelector(".p-2-2").style.display = 'none';
    document.querySelector(".container-main-bottom-2-read-less").style.display = 'none';
    document.querySelector(".p-2-3").style.display = 'none';
    document.querySelector(".container-main-bottom-3-read-less").style.display = 'none';
})

document.querySelector(".container-main-bottom-1-read-more").onclick = function () {
    document.querySelector(".p-2-1").style.display = 'block';
    document.querySelector(".container-main-bottom-1-read-less").style.display = 'block';

    document.querySelector(".container-main-bottom-1-read-more").style.display = 'none';
}
document.querySelector(".container-main-bottom-1-read-less").onclick = function () {
    document.querySelector(".p-2-1").style.display = 'none';
    document.querySelector(".container-main-bottom-1-read-less").style.display = 'none';

    document.querySelector(".container-main-bottom-1-read-more").style.display = 'block';
}

document.querySelector(".container-main-bottom-2-read-more").onclick = function () {
    document.querySelector(".p-2-2").style.display = 'block';
    document.querySelector(".container-main-bottom-2-read-less").style.display = 'block';

    document.querySelector(".container-main-bottom-2-read-more").style.display = 'none';
}
document.querySelector(".container-main-bottom-2-read-less").onclick = function () {
    document.querySelector(".p-2-2").style.display = 'none';
    document.querySelector(".container-main-bottom-2-read-less").style.display = 'none';

    document.querySelector(".container-main-bottom-2-read-more").style.display = 'block';
}

document.querySelector(".container-main-bottom-3-read-more").onclick = function () {
    document.querySelector(".p-2-3").style.display = 'block';
    document.querySelector(".container-main-bottom-3-read-less").style.display = 'block';

    document.querySelector(".container-main-bottom-3-read-more").style.display = 'none';
}
document.querySelector(".container-main-bottom-3-read-less").onclick = function () {
    document.querySelector(".p-2-3").style.display = 'none';
    document.querySelector(".container-main-bottom-3-read-less").style.display = 'none';

    document.querySelector(".container-main-bottom-3-read-more").style.display = 'block';
}
