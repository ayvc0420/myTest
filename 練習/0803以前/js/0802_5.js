
function hello (){
    console.log('hello!');
}

hello();
console.log();

console.log('分隔');



function money(item1,item2,item3){
    console.log('物品1 : ',item1);
    console.log('物品2 : ',item2);
    console.log('折扣 : ',item3);
    // let moneyAns = item1 + item2 -item3;
    // return moneyAns;
    return item1+item2-item3;

}

let test_money = money(1000,1500,500)
console.log('money : ', test_money);


console.log('分隔');console.log('分隔');console.log('分隔');

//建立物件 
function createCard(initName){
    this.cardName = initName;
    this.cardName = initName;
    this.cardName = initName;
}

const a1 = new createCard('hello 測試1號');
const a2 = new createCard('hello 測試2號');
const a3 = new createCard('hello 測試3號');

console.log(a1);
console.log(a2);
console.log(a3);