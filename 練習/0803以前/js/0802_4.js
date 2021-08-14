//for迴圈

for (let i = 0;i<=10;i++){
    console.log(i);
}

console.log('分隔');
console.log('分隔');

let classA = ['100','70','50','70','80','90','100'];

for(let o=0;o<classA.length;o++){
    if(o===3){
        classA[o]  = '500'; 
    }
    console.log('小美的分數 : ' , classA[o]);
}

//while的條件為true / false

let while_test_01 = 10;
let p = 0;
let while_test_yesno = true;

while(while_test_yesno){
    if(p === while_test_01){
        while_test_yesno = false;
    }
    console.log('當前次數 : ',p );
    p+=0.5;
}
