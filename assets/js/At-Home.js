window.addEventListener('resize', function () {
  if (window.innerWidth > 501) {
    if (document.querySelector(".container-For-individuals-at-home-bottom").style.display === 'none') {
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

// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   angular.element(window).bind('resize', function() {
//     $scope.$apply(function() {
//       if (window.innerWidth > 501) {
//         if (angular.element(document.querySelector(".container-For-individuals-at-home-bottom")).css('display') === 'none') {
//           angular.element(document.querySelector("main")).css('display', 'flex');
//           angular.element(document.querySelector("footer")).css('display', 'flex');
//         }
//         angular.element(document.querySelector(".container-main-top")).css('display', 'none');
//       } else if (window.innerWidth < 501) {
//         angular.element(document.querySelector("main")).css('display', 'flex');
//         angular.element(document.querySelector("footer")).css('display', 'flex');
//         angular.element(document.querySelector(".container-main-top")).css('display', 'block');
//       }
//     });
//   });
// });


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

// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   angular.element(document).ready(function () {
//     if (window.innerWidth > 501) {
//       angular.element(document.querySelector("main")).css('display', 'none');
//       angular.element(document.querySelector("footer")).css('display', 'none');
//       angular.element(document.querySelector(".container-main-top")).css('display', 'none');
//     } else if (window.innerWidth < 501) {
//       angular.element(document.querySelector("main")).css('display', 'flex');
//       angular.element(document.querySelector("footer")).css('display', 'flex');
//       angular.element(document.querySelector(".container-main-top")).css('display', 'block');
//     }
//   });
// });

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 20) {
      document.querySelector('.container-neuro-At-Home-img-1-span').style.right = '-1010px';
  }
});

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 400) {
      document.querySelector('.container-neuro-At-Home-img-2-span').style.left = '-1300px';
  }
});

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 1000) {
      document.querySelector('.container-neuro-At-Home-img-3-span').style.right = '-1400px';
  }
});

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop >= 1300) {
      document.querySelector('.container-neuro-At-Home-img-4-span').style.left = '-1500px';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.container-For-individuals-at-home-left ').style.left = '10%';
  document.querySelector('.container-For-individuals-at-home-right').style.right = '10%';
});

document.querySelector(".container-For-individuals-at-home-bottom").onclick = function () {
  document.querySelector("main").style.display = 'flex';
  document.querySelector("footer").style.display = 'flex';

  if (window.innerWidth < 1300) {
    document.querySelector(".container-For-individuals-at-home").style.marginTop = '-65vw';
  }
  else {
    document.querySelector(".container-For-individuals-at-home").style.marginTop = '-858px';
  }

  setTimeout(function () {
    document.querySelector(".container-For-individuals-at-home").style.opacity = '0';
  }, 1000);
  setTimeout(function () {
    document.querySelector(".container-For-individuals-at-home").style.display = 'none';
  }, 2000);
};

window.addEventListener('scroll', function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll >= 10) {
      document.querySelector('.container-header').style.backgroundColor = '#EDD008';
  } else {
      document.querySelector('.container-header').style.backgroundColor = 'white';
  }
});