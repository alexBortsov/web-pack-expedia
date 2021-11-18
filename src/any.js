//import $ from "jquery";
// import './index.css';
//import './js/jquery-3.6.0';
//import './js/multislider';
import './style.scss';

$(document).ready(function(){
   $('.burger-menu').click(function (event) {
       $('.burger-menu, .header__menu').toggleClass('active');
   });
   $('#expedia__slider').multislider({
     duration: 750,
     interval: 3000
  });
});