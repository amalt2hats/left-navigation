
var navContainer = document.getElementById('menu-block');
var navs = navContainer.querySelectorAll('nav');
var icon = document.getElementById('menu-icon');
 

icon.addEventListener('click', function() {
  var isMenuOpen = navContainer.classList.contains('open');
  
  if (isMenuOpen) {
    navContainer.classList.remove('open');
    document.body.classList.remove('no-scroll');
    icon.getElementsByTagName('i')[0].classList.remove('bi-x-lg');
    document.getElementsByClassName('overlay')[0].classList.remove ('open');
    
  } else {
    navContainer.classList.add('open');
    document.body.classList.add('no-scroll');
    icon.getElementsByTagName("i")[0].classList.add('bi-x-lg');
    document.getElementsByClassName('overlay')[0].classList.add ('open');
  }
});


navs.forEach((nav, index) => {
  nav.id = 'nav' + (index + 1);
});


navs.forEach((nav, index) => {
  var lis = nav.querySelectorAll('li');
  lis.forEach((li) => {
      li.addEventListener('mouseover', () => {
          if (index + 1 < navs.length) {
              navs[index + 1].classList.add("isvisible");
          }
      });
  });
});













