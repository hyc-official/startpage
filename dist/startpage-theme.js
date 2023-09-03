var updtexttheme = function () {
    if (read_cookie("DarkMode") == "1") {
        document.getElementById("main2").style.color = "#ffffff";
    }
};
var startpage_setcookies = function () {
    names = ["DarkMode", "DefaultEngine"], values = [document.getElementsByName("darkmode")[0].checked ? "1" : "0", document.getElementById("default-engine").selectedIndex.toString()];
    set_cookie(names, values);
    window.alert("设置已保存");
    location.reload();
};
var startpage_readcookies = function () {
    return [read_cookie("DarkMode"), read_cookie("DefaultEngine")];
};
var updengine = function () {
    engine = read_cookie("DefaultEngine");
    if (engine != null) {
        document.getElementById("select-engine").selectedIndex = engine;
    }
    searchengine_change();
};
var updtheme = function () {
    if (read_cookie("DarkMode") == "1") {
        document.body.style.backgroundColor = "#35363a";
    }
};
var loadsettings = function () {
    settings = startpage_readcookies();
    document.getElementsByName("darkmode")[0].checked = settings[0] == "1";
    document.getElementById("default-engine").selectedIndex = settings[1];
};