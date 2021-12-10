(function(){

    let demo01 : boolean = true;
    console.log(demo01)

    let demo02 : number = 10;
    console.log(demo02)

    let demo03 : string = 'yuki'
    let demo04: string = `Hello, my name is ${demo03}.
I'll be ${demo02 + 1} years old next month.`;
    console.log(demo04)


    // 以下皆錯誤 違反ts強型別
    // let demo05 = 'one';
    // demo05 = 1;

    // let demo05 : string = 'one'
    // demo05 = 1

    let demo05 : string = 'one'
    demo05 = '1'

    console.log(demo05)

})()