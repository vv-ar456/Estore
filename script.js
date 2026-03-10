function changeImage(img){

document.getElementById("main-image").src = img.src;

}



function showPayment(){

document.getElementById("paymentSection").style.display="block";

}



var countDownDate = new Date().getTime() + 3600000;

var x = setInterval(function(){

var now = new Date().getTime();

var distance = countDownDate - now;

var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

},1000);



setInterval(function(){

var popup = document.getElementById("popup");

popup.style.display="block";

setTimeout(function(){

popup.style.display="none";

},4000);

},15000);
