window.addEventListener('load', adjustPosition);
function adjustPosition() {
  const neuroImg = document.querySelector('.Neuro-img-11');
  neuroImg.style.top = '670px';
}

const containerMain1Right = document.querySelector('.container-main-1-right');
const containerMain1Left = document.querySelector('.container-main-1-left');
containerMain1Right.style.right = '50px';
containerMain1Left.style.left = '120px';

window.addEventListener('scroll', function () {
  const containerMain6Bottom1 = document.querySelector('.container-main-6-bottom-1');
  const containerMain6Bottom2 = document.querySelector('.container-main-6-bottom-2');
  const containerMain6Bottom3 = document.querySelector('.container-main-6-bottom-3');
  const containerMain6Bottom4 = document.querySelector('.container-main-6-bottom-4');

  if (window.pageYOffset >= 2000) {
    containerMain6Bottom1.style.top = '0';
    containerMain6Bottom2.style.top = '0';
    containerMain6Bottom3.style.top = '0';
    containerMain6Bottom4.style.top = '0';
  }
});

const sec4MainDoubleImg = document.querySelector('.sec-4-main-double-img');
const sec4MainNeuroBackImg22 = document.querySelector('.sec-4-main-Neuro-back-img-22');

window.addEventListener('scroll', function () {
  const elemPosition = sec4MainDoubleImg.offsetRight;

  if (window.pageYOffset > 500) {
    sec4MainDoubleImg.style.right = '50px';
    sec4MainNeuroBackImg22.style.top = '1030px';
  } else {
    sec4MainDoubleImg.style.right = `${elemPosition}px`;
  }
});

const btnAgree = document.querySelectorAll('.btn-I-Agree-Cookies, .btn-Reject-Cookies');
const pageCookiesBack = document.querySelector('.container-Cookies-back');

pageCookiesBack.style.display = 'none';
setTimeout(function () {
  pageCookiesBack.style.display = 'flex';
}, 5900);
setTimeout(function () {
  pageCookiesBack.style.bottom = '0';
}, 6000);

btnAgree.forEach(function (btnCloseCookies) {
  btnCloseCookies.onclick = function () {
    pageCookiesBack.style.bottom = '-300px';
    setTimeout(function () {
      pageCookiesBack.style.display = 'none';
    }, 1000);
  }
});
