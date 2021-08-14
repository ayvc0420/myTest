

// window.onload = (function(){

// })

// // callback 回呼
window.addEventListener('load',function(){      //監聽 load整個網頁後後執行function

    const p1 = document.getElementById('title_test');
    p1.innerText = "還沒按";
    console.log(p1);

    const b1 = document.getElementById('btn');
    b1.addEventListener('click', function () {  //監聽 click後執行function
        p1.innerHTML = '被按了';
    })
    
    const inputCopy = document.getElementById('input_test')
    inputCopy.addEventListener('keyup',function(aa){
        console.log('input',aa.target.value);  //log出aa參數的target.value 使用keyup功能
        // console.log('input',aa.);           //log出aa參數 使用keyup功能
    })
})

let i = 10
let NewStringValue = 10
document.getElementById("aaa").innerHTML = i;
document.getElementById("NewStringBox").innerHTML=NewStringValue;
$(function(){
    $('#aaa').html(i);
})