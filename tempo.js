// Copyright 2014 David Vazgenovich Shakaryan <dvshakaryan@gmail.com>
// Distributed under the terms of the GNU General Public License v2.
// See http://www.gnu.org/licenses/gpl-2.0.txt for the full license text.

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

	var str_d = dd + " " + months[dm] + " " + dy;

	document.getElementById("h").innerHTML = padTime(h);
	document.getElementById("m").innerHTML = padTime(m);
	document.getElementById("s").innerHTML = padTime(s);
	document.getElementById("dateval").innerHTML = str_d;
}

function startTempo() {
	updateTime();

	setTimeout(function() {updateTime(); setInterval(updateTime, 1000)},
		1000 - new Date().getTime() % 1000);
}

window.onload = startTempo;

document.addEventListener('contextmenu', function(e) {e.preventDefault()});
