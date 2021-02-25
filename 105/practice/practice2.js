console.log("Practice 2");
//document.querySelector('main).display="none";
jQuery('main').hide();
jQuery('main').show();
jQuery('nav a:fist').hide();
//hide the last input
jQuery('form input:last').hide();
var copy=$('main').clone();
jQuery('main').append(copy);