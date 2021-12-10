(function () {
    var demo01 = true;
    console.log(demo01);
    var demo02 = 10;
    console.log(demo02);
    var demo03 = 'yuki';
    var demo04 = "Hello, my name is ".concat(demo03, ".\nI'll be ").concat(demo02 + 1, " years old next month.");
    console.log(demo04);
    // 以下皆錯誤 違反ts強型別
    // let demo05 = 'one';
    // demo05 = 1;
    // let demo05 : string = 'one'
    // demo05 = 1
    var demo05 = 'one';
    demo05 = '1';
    console.log(demo05);
})();
