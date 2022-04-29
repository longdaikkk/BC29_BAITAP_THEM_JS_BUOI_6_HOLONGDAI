
document.getElementById("btn_1").onclick = function () {
    var n = document.getElementById("number").value*1;
    var dem = 0;
    var content = "";
    for (var i = 0; i <= n; i++) {
        dem = 0;
        for (var j = 0; j <= i; j++) {
            if (i % j == 0) {
                dem++;
            }
        }
        if (dem == 2) {
            content += i + " ";
        }
    }
    document.getElementById("footer_1").innerHTML = "Kết quả: " + content;
}