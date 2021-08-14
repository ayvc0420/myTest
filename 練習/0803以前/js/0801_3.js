let a = 100 , b = 50;
let ans = a > b;
console.log(ans)

//&& 變數中兩邊都是true則會為true 若為兩邊都false則會為false   (and)
//|| 只要有一邊是true就會為true   (or)
//!  反向
let aaa = false && false;
console.log('&&的 : ' + aaa);
aaa = false || true;
console.log('||的 : ' + aaa);
aaa = ! (false || true)
console.log('!的 : ' + aaa);
console.log('測試 下');
let q = 50;
qq = q != '50';   //'50' == 50  → true
console.log('第一個 :' + qq)
qq = q !== '50';  //'50' === 50 → false
console.log('第二個 :' + qq)


console.log('if分隔');

let score = 99;
if(score >= 100){
    console.log('滿分!');
}else if(score >= 80){
    console.log('還不錯!');
}else if(score >= 60){
    console.log('勉強及格邊緣');
}else{
    console.log('連及格都沒有，真慘！');
}

console.log('switch case 分隔');

let key = 300;
switch (key) {
    case 500:
        console.log('500');
        break;
    case 300:
        console.log('300');
        break;
    case 100:
        console.log('100');
        break;
    default:
        console.log('都不對');
        break;
}

let spp;
function sp(spp){
    return spp + spp;
}
let su = sp(8);
console.log(su);