var userFirstName, userLastName, user, d, m, time, cookieValue, userInformation, cookieInfoUpperStr, windowInfo, log, keysPressed, leavingInfo, userMessage, ipLook, ipLookLong, dataX, appliedData;

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

    // User's Input Information
    userFirstName = window.prompt('Please enter your first name: ');
    userLastName = window.prompt('Please enter your last name: ');
    user = { first_name: userFirstName, last_name: userLastName };
    cookieValue = cookieString(32);
    // User's given data
    d = new Date();
    m = {
        0: 'Jan',
        1: 'Feb',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'Jul',
        7: 'Aug',
        8: 'Sept',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    };
    time = {
        year: d.getFullYear(),
        month: m[d.getMonth()],
        day: d.getDay(),
        hour: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds()
    };
    ///////////////////////////// Extra Info
    h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowInfo = { Height: h, Width: w };


    function ipInformation() {
        ipLook = fetch('https://ipapi.co/json/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data);
                data = JSON.stringify(data, null, 2);
                // console.log(data);
                document.getElementById('ipBox').value = data;
            });
    }

    userInformation = { user_name: user, cookie_value: cookieValue, current_time: time, window_information: windowInfo };
    // console.log(userInformation);
    // Real browser cookie
    cookieInfoUpperStr = JSON.stringify(userInformation); // Makes the cookie not [object Object]
    document.cookie = 'cookie=' + cookieValue + ';expires=Thu, 26 Mar 2020 15:26:23 GMT;path=/';
    ///////////////////////////// End Extra Info

}

function setVisit() {
    // Key Logger
    // log = document.documentElement;
    // keysPressed = []
    // document.addEventListener('keydown', logKey);
    // function logKey(e) {
    //     keysPressed.push(log = ` ${e.code}`);
    //     console.log(keysPressed);
    // }
    // End key - logger

    if (document.cookie.length < 1) {
        cookie();
        document.getElementById('emailBox').value = 'DNR@robot.com';
        document.getElementById('textarea').value = cookieInfoUpperStr;
        jQuery(document).ready(function () {
            setTimeout(function () {
                document.getElementById('submit').click();
            }, 50);
        });
    }
}