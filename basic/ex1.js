"use strict";
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(list);
var fun = [];
var _loop_1 = function (i) {
    var y = i * i;
    fun.push(function () {
        document.write(y);
    });
};
for (var i = 0; i <= list.length; i++) {
    _loop_1(i);
}
fun.forEach(function (func) {
    func();
});
