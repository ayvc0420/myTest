// //建立物件  0802_5.js
// function createCard(initName){
//     this.名字 = initName;
//     this.學號 = initName;
//     this.綽號 = initName;
// }

// const a1 = new createCard('hello 測試1號');
// const a2 = new createCard('hello 測試2號');
// const a3 = new createCard('hello 測試3號');

// console.log(a1);
// console.log(a2);
// console.log(a3);

// class Card{
//     constructor(frome1){
//         this.一號 = frome1;
//         this.二號 = frome1;
//     }
// }

// const f1 = new Card('大壯');
// const f2 = new Card('小美');

// console.log(f1);
// console.log(f2);


// 以下this綁定範例
class Card{
    constructor(ininName){
        this.name_test =ininName;
        this.fixed_name_test = this.hello.bind(this);   //回傳se綁定this後的原函數
    }
    hello () {
        console.log('hello', this.name_test);
    }
}

const name_test_01 = new Card('小新');
console.log('name_test_01 :',name_test_01);


const name_test_02 = {name : '阿良'};
name_test_02.fixed_name_test = name_test_01.fixed_name_test;
name_test_02.fixed_name_test();
console.log(name_test_02)

//繼承
//https://www.youtube.com/watch?v=1pYtVwIAvhY 2:20:00