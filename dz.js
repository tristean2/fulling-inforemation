javascript:
var labels = document.querySelectorAll('.field-label');
var elements = document.querySelectorAll('.ui-input-text');
for (var i = 0; i < labels.length; i++) {
    txt = labels[i].textContent;
    if (txt.indexOf("院系") != -1) {
        elements[i].querySelector("input").value = "信息管理系";
    }
    if (txt.indexOf("联系方式") != -1 || txt.indexOf("电话") != -1 || txt.indexOf("手机") != -1) {
        elements[i].querySelector("input").value = "18589334369";
    }
    if (txt.indexOf("姓名") != -1) {
        elements[i].querySelector("input").value = "张天行";
    }
    if (txt.indexOf("学号") != -1) { 
        elements[i].querySelector("input").value = "2100016628"; 
    }
    if (txt.indexOf("请不要修改此条") != -1) {
        elements[i].querySelector("input").value = "如果不添加这一条判断，可能会出现填写完后刷新页面的情况，导致填写的内容丢失，目前尚未理解其原理";
    }
}
void (0);