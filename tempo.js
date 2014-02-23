var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function padTime(x) {
	if(x < 10) {
		return "0" + x;
	} else {
		return x;
	}
}

function updateTime() {
	var date = new Date();

	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	var dd = date.getDate();
	var dm = date.getMonth();
	var dy = date.getFullYear();

	var str_t = padTime(h) + ":" + padTime(m) + ":" + padTime(s);
	var str_d = dd + " " + months[dm] + " " + dy;

	document.getElementById("timeval").innerHTML = str_t;
	document.getElementById("dateval").innerHTML = str_d;
}

function startTempo() {
	updateTime();

	setInterval(updateTime, 1000);
}

window.onload = startTempo;
