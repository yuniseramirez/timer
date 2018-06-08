var countDownDate = new Date("Dec 6, 2018 12:07:25").getTime();

var sec = setInterval(function(){


	var today = new Date().getTime();

	var distance = countDownDate - today;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = (days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ");

});


