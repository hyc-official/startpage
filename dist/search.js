var urls = ["https://www.baidu.com/s?wd=\"%KeyWord%\"", "https://cn.bing.com/search?q=%KeyWord%", "https://fsoufsou.com/search?q=%KeyWord%", "https://zh.moegirl.org.cn/index.php?title=%KeyWord%", "https://fanyi.baidu.com/#auto/zh/%KeyWord%"];
var homes = ["https://www.baidu.com", "https://cn.bing.com", "https://fsoufsou.com", "https://zh.moegirl.org.cn/Mainpage", "https://fanyi.baidu.com"];
var names = ["百度", "必应", "F 搜", "萌娘百科", "百度翻译"];
var index = 0;
var placeholder_template = "使用 %Word% 搜索";
var searchengine_change = function () {
    index = document.getElementById("select-engine").selectedIndex;
    document.getElementById("search-box").placeholder = placeholder_template.replace(/%Word%/g, names[index]);
};
var redirect = function () {
    search_val = document.getElementById("search-box").value;
    if (search_val == "") {
        window.open(homes[index]);
    }
    else {
        window.open(urls[index].replace(/%KeyWord%/g, search_val));
    }
};
document.onkeydown = function () {
    if (event.keyCode == 13) {
        redirect();
    }
};

var setcolor = function (color) {
    document.getElementById("main").style.color = color;
};
var Chtholly_times = 0;
var searchtext_change = function () {
    st = document.getElementById("search-box").value;
    if (st == "珂朵莉" || st == "Chtholly") {
        setcolor("#55c8fb");
        Chtholly_times++;
        console.log("User input Chtholly for %d time(s)", Chtholly_times);
        if (Chtholly_times >= 68) {
            console.log("User trigger the bonus scene");
            window.alert("珂朵莉是世界上最幸福最可爱的女孩子！\n注：你已经输入了至少 68 次珂朵莉！");
        }
    }
    else {
        setcolor("#68e8bd");
    }
};