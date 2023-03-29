window.addEventListener('resize', function () {
    if ( window.innerWidth > 501) {
    if (document.querySelector(".container-For-individuals-In-Clinics").style.display === 'none') {
    document.querySelector("main").style.display = 'flex';
    document.querySelector("footer").style.display = 'flex';
    }
    document.querySelector(".container-main-top").style.display = 'none';
    }
    else if (window.innerWidth < 501) {
    document.querySelector("main").style.display = 'flex';
    document.querySelector("footer").style.display = 'flex';
    document.querySelector(".container-main-top").style.display = 'block';
    }
    });
    
    //
    
    window.addEventListener('load', function () {
    if (window.innerWidth > 501) {
    document.querySelector("main").style.display = 'none';
    document.querySelector("footer").style.display = 'none';
    document.querySelector(".container-main-top").style.display = 'none';
    }
    else if (window.innerWidth < 501) {
        document.querySelector("main").style.display = 'flex';
        document.querySelector("footer").style.display = 'flex';
        document.querySelector(".container-main-top").style.display = 'block';
    }
});

//

window.addEventListener('scroll', function () {
var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
if (currentScroll >= 10) {
document.querySelector('.container-header').style.backgroundColor = '#EDD008';
} else {
document.querySelector('.container-header').style.backgroundColor = 'white';
}
});

//

document.querySelector(".container-For-individuals-In-Clinics-left ").style.left = '10%';
document.querySelector(".container-For-individuals-In-Clinics-right").style.right = '10%';

//

document.querySelector(".container-For-individuals-In-Clinics-bottom").onclick = function () {
document.querySelector("main").style.display = 'flex';
document.querySelector("footer").style.display = 'flex';

if (window.innerWidth < 1300) {
    document.querySelector(".container-For-individuals-In-Clinics").style.marginTop = '-65vw';
}
else {
    document.querySelector(".container-For-individuals-In-Clinics").style.marginTop = '-858px';
}

setTimeout(function () {
    document.querySelector(".container-For-individuals-In-Clinics").style.opacity = '0';
}, 1000);
setTimeout(function () {
    document.querySelector(".container-For-individuals-In-Clinics").style.display = 'none';
}, 2000);}

//

window.addEventListener('scroll', function () {
if (window.scrollY >= 20) {
document.querySelector('.container-neuro-In-Clinics-img-1-span').style.right = '-1010px';
}
});

window.addEventListener('scroll', function () {
if (window.scrollY >= 400) {
document.querySelector('.container-neuro-In-Clinics-img-2-span').style.left = '-1010px';
}
});
