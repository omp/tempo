// Copyright 2014 David Vazgenovich Shakaryan <dvshakaryan@gmail.com>
// Distributed under the terms of the GNU General Public License v2.
// See http://www.gnu.org/licenses/gpl-2.0.txt for the full license text.

function saveOptions() {
	var timeformat = 24;
	if(document.getElementById('t12').checked) {
		var timeformat = 12;
	}

	localStorage['timeformat'] = timeformat;

	var status = document.getElementById('status');
	status.style['visibility'] = 'visible';

	setTimeout(function() {status.style['visibility'] = 'hidden'}, 2000);
}

function restoreOptions() {
	var timeformat = localStorage['timeformat'];

	if(!timeformat) {
		timeformat = 24;
	}

	var option = document.getElementById('t' + timeformat);

	option.checked = true;
}

function startOptions() {
	restoreOptions();

	document.querySelector('#save').addEventListener('click', saveOptions);
}

window.onload = startOptions;
