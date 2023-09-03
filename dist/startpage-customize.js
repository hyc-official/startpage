var default_links = [
    ["百度搜索", "https://www.baidu.com", "https://www.baidu.com/favicon.ico"],
    ["百度翻译", "https://fanyi.baidu.com", "https://fanyi.baidu.com/favicon.ico"],
    ["必应 / Bing", "https://cn.bing.com", "https://cn.bing.com/favicon.ico"],
    ["F 搜", "https://fsoufsou.com", "https://static.hetaousercontent.com/static/assets/favicon.ico"],
    ["洛谷", "https://www.luogu.com.cn", "https://www.luogu.com.cn/favicon.ico"],
    ["洛谷帖子保存站", "https://lgbbs.oiso.cf", "https://www.luogu.com.cn/favicon.ico"],
    ["Hydro", "https://hydro.ac", "https://hydro.ac/favicon.ico"],
    ["Codeforces", "https://codeforces.com", "https://codeforces.com/favicon.ico"],
    ["AtCoder", "https://atcoder.jp", "https://atcoder.jp/favicon.ico"],
    ["Virtual Judge", "https://vjudge.net", "https://vjudge.net/favicon.ico"]];
var links;
var links_save = function () {
    names = ["lnknum"];
    values = [links.length];
    for (var i = 0; i < links.length; i++) {
        names[names.length] = "lnk" + i;
        values[values.length] = encodeURIComponent(links[i][0] + "\\" + links[i][1] + "\\" + links[i][2]);
    }
    set_cookie(names, values);
};
var links_read = function () {
    lnknum = read_cookie("lnknum");
    if (lnknum == null) {
        links = default_links;
        return;
    }
    links = [];
    for (var i = 0; i < lnknum; i++) {
        links[links.length] = decodeURIComponent(read_cookie("lnk" + i)).split("\\");
    }
};
var links_load_display = function () {
    document.getElementById("links").innerHTML = "";
    for (var i = 0; i < links.length; i++) {
        document.getElementById("links").innerHTML += "<a href=\"" + links[i][1] + "\" target=\"_blank\"><div class=\"linkto-light\" id=\"lnk" + i + "\"><center><img class=\"linkto-img\" src=\"" + links[i][2] + "\"><p>" + links[i][0] + "</p></center></div></a>\n";
    }
    if (links.length % 10 != 0) {
        document.getElementById("lnk" + (Math.floor(links.length / 10) * 10)).style.marginLeft = ((10 - links.length % 10) * 5) + "%";
    }
};
var links_load_settings = function () {
    document.getElementById("links").innerHTML = "";
    for (var i = 0; i < links.length; i++) {
        document.getElementById("links").innerHTML += "<p><label><input type=\"checkbox\" name=\"check-links\">" + links[i][0] + "</label></p>\n";
    }
};
var links_urlchanged = function () {
    link_to = document.getElementById("newlink-to").value;
    if (link_to.indexOf(".") == -1 || link_to.indexOf("/", link_to.indexOf(".")) == -1) {
        document.getElementById("newlink-icon").placeholder = link_to + "/favicon.ico";
    }
    else {
        document.getElementById("newlink-icon").placeholder = link_to.substring(0, link_to.indexOf("/", link_to.indexOf("."))) + "/favicon.ico";
    }
};
var links_add = function () {
    display_name = document.getElementById("newlink-name").value;
    link_to = document.getElementById("newlink-to").value;
    display_icon = document.getElementById("newlink-icon").value;
    if (display_icon == "") {
        display_icon = document.getElementById("newlink-icon").placeholder;
    }
    if (display_name.indexOf("\\") != -1 || link_to.indexOf("\\") != -1 || display_icon.indexOf("\\") != -1) {
        window.alert("请勿出现反斜杠\"\\\"");
        return;
    }
    links[links.length] = [display_name, link_to, display_icon];
    links_load_settings();
};
var links_del = function () {
    all = document.getElementsByName("check-links");
    for (var i = all.length - 1; i >= 0; i--) {
        if (all[i].checked) {
            links.splice(i, 1);
        }
    }
    links_load_settings();
};
var links_dft = function () {
    links = default_links;
    links_load_settings();
};

var default_title = "Heyc's Startpage";
var title;
var title_save = function () {
    title = document.getElementById("title").value;
    if (title == "") {
        title = default_title;
    }
    set_cookie(["title"], [encodeURIComponent(title)]);
}
var title_read = function () {
    title = read_cookie("title");
    if (title == null) {
        title = default_title;
    }
    else {
        title = decodeURIComponent(title);
    }
}
var title_load_display = function () {
    if (title == default_title) {
        return;
    }
    document.getElementById("page-header").innerHTML = title + " - Powered By Heyc's Startpage";
    document.getElementById("main-header").innerHTML = title;
}
var title_load_settings = function () {
    document.getElementById("title").value = title;
}