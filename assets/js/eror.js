// btn
const btnShowErorPopup = document.querySelectorAll('.a-1, .a-2, .btn-google, .btn-apple, .container-main-1-left-Download, .btns-sec-2-main-download');
const btnCancleErorPopup = document.querySelectorAll('.cancel-eror, .cancel-eror-2');

// page
const pageErorPopup = document.querySelector(".container-eror");

// functions

btnShowErorPopup.forEach(ShowErorPopup => {ShowErorPopup.onclick = function () {
        pageErorPopup.style.display = 'flex'
}})

// 

btnCancleErorPopup.forEach(CancleErorPopup => {CancleErorPopup.onclick = function () {
    pageErorPopup.style.display = 'none';
}})