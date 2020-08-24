var userFirstName,
	userLastName,
	user,
	d,
	m,
	time,
	cookieValue,
	userInformation,
	cookieInfoUpperStr,
	windowInfo,
	log,
	keysPressed,
	leavingInfo,
	userMessage,
	ipLook,
	ipLookLong,
	dataX,
	appliedData;

function cookieString(len, charSet) {
	charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-`';
	var cookieString = '';
	for (var i = 0; i < len; i++) {
		var randomPoz = Math.floor(Math.random() * charSet.length);
		cookieString += charSet.substring(randomPoz, randomPoz + 1);
	}
	return cookieString;
}

function cookie() {
	ipInformation();
	cookieValue = cookieString(800);

	// User's Input Information
	userFirstName = window.prompt('Please enter your first name: ');
	userLastName = window.prompt('Please enter your last name: ');
	user = { first_name: userFirstName, last_name: userLastName };

	// User's given data
	d = new Date();
	m = {
		0  : 'Jan',
		1  : 'Feb',
		2  : 'Mar',
		3  : 'Apr',
		4  : 'May',
		5  : 'Jun',
		6  : 'Jul',
		7  : 'Aug',
		8  : 'Sep',
		9  : 'Oct',
		10 : 'Nov',
		11 : 'Dec',
	};
	wd = {
		0 : 'Sun',
		1 : 'Mon',
		2 : 'Tue',
		3 : 'Wed',
		4 : 'Thu',
		5 : 'Fri',
		6 : 'Sat',
	};
	time = {
		year    : d.getFullYear(),
		month   : m[d.getMonth()],
		day     : wd[d.getDay()],
		hour    : d.getHours(),
		minutes : d.getMinutes(),
		seconds : d.getSeconds(),
	};
	///////////////////////////// Extra Info
	h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	windowInfo = { Height: h, Width: w };

	document.cookie =
		'cookie=' +
		cookieValue +
		';expires=' +
		time.day +
		', 26 ' +
		time.month +
		(time.year + 1) +
		' 00:00:01 MST;path=/';

	function ipInformation() {
		ipLook = fetch('https://ipapi.co/json/')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				data = JSON.stringify(data, null, 2);
				document.getElementById('ipBox').value = data;
			});
	}

	userInformation = { user_name: user, cookie_value: cookieValue, current_time: time, window_information: windowInfo };
	cookieInfoUpperStr = JSON.stringify(userInformation); // Makes the cookie not [object Object]

	///////////////////////////// End Extra Info
}

function setVisit() {
	if (document.cookie != document.cookie || document.cookie.length < 1) {
		cookie();
		document.getElementById('emailBox').value = 'DNR@robot.com';
		document.getElementById('textarea').value = cookieInfoUpperStr;
		jQuery(document).ready(function() {
			setTimeout(function() {
				document.getElementById('submit').click();
			}, 100);
		});
	}
}
