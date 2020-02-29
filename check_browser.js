function getBrowserName()
{
    var name;
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("MSIE") >= 0) {
        name = "MSIE";
    } else if (userAgent.indexOf("Netscape") >= 0) {
        name = "Netscape";
    }
    else if (userAgent.indexOf("Firefox") >= 0) {
        name = "Firefox";
    }
    else if (userAgent.indexOf("Safari") >= 0) {
        name = "Safari";
    }
    else if (userAgent.indexOf("Opera") >= 0) {
        name = "Opera";
    } else {
        name = "UNKNOWN";
    }
    return name;
}

function getBrowserVersion()
{
    var findIndex;
    var version = 0;
    var name = getBrowserName();
    var userAgent = navigator.userAgent;

    findIndex = userAgent.indexOf(name) + name.length + 1;
    version = parseFloat(userAgent.substring(findIndex, findIndex + 6));
    return version;
}

console.log(getBrowserName());
console.log(getBrowserVersion());