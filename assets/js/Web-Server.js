const btnShowLoginModalInAppGame = document.querySelectorAll('.container-main-2-btn-1, .container-main-2-btn-2');
       
btnShowLoginModalInAppGame.forEach(btnShow => {btnShow.onclick = function () {
     if (pageLoginModal.style.display === 'none') {
         pageLoginModal.style.display = 'Grid';
         btnCancelProfileModal.style.display = 'block';
     }
     else {
         pageLoginModal.style.display = 'none';
     }
 }})