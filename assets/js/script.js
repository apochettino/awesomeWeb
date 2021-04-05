const menuBar = document.querySelector('.menu-bar02');
const navBar = document.querySelector('.nav-bar02');

menuBar.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
});



 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 1080);
 });




