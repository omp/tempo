// Copyright 2014 David Vazgenovich Shakaryan <dvshakaryan@gmail.com>
// Distributed under the terms of the GNU General Public License v2.
// See http://www.gnu.org/licenses/gpl-2.0.txt for the full license text.

function save_options() {
	var select = document.getElementById('timeformat');
	var timeformat = select.children[select.selectedIndex].value;
	localStorage['timeformat'] = timeformat;

	var status = document.getElementById('status');
	status.innerHTML = 'Options saved.';

	setTimeout(function() {status.innerHTML = ''}, 1000);
}

function restore_options() {
	var timeformat = localStorage['timeformat'];

	if(!timeformat) {
		return;
	}

	var select = document.getElementById('timeformat');

	for(var i = 0; i < select.children.length; i++) {
		var child = select.children[i];

		if(child.value == timeformat) {
			child.selected = 'true';

			break;
		}
	}
}

function start_options() {
	restore_options();

	document.querySelector('#save').addEventListener('click', save_options);
}

window.onload = start_options;
