var set_cookie = function (name, value) {
    for (var i = 0; i < (name.length < value.length ? name.length : value.length); i++) {
        document.cookie = name[i] + "=" + value[i] + ";";
    }
};
var read_cookie = function (name) {
    cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        tmp = cookies[i].split("=");
        if (tmp[0] == name) {
            return tmp[1];
        }
    }
    return null;
};