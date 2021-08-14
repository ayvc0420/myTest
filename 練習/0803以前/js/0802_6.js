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

class card{
    constructor(frome1){
        this.一號 = frome1;
        this.二號 = frome1;
        this.三號 = frome1;
        this.四號 = frome1;

    }

}

const f1 = new card('風霜');
const f2 = new card('美麗');

console.log(f1);
console.log(f2);


// 以下this綁定範例
class Card{
    constructor(ininName){
        this.name_test = ininName;
        this.fixed_name_test = this.hello.bind(this);  
    }
    hello () {
        console.log('hello', this.name_test);
    }
}

const Name_test_01 = new Card('a0000778');
console.log('Name_test_01',Name_test_01);
Name_test_01.hello();

const Name_test_02 = {name : '79'};
Name_test_02.fixed_name_test = Name_test_01.fixed_name_test;
Name_test_02.fixed_name_test();


//繼承
//https://www.youtube.com/watch?v=1pYtVwIAvhY 2:20:00