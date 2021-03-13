var i = 0;
var txt = "Mith's Website";
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
	document.getElementById("demo").innerHTML += txt.charAt(i);
	i++;
	setTimeout(typeWriter, speed);
  }
}