let classA = ['大雄','多拉A夢','靜香','胖虎']
console.log('轉學前 : ' + classA + ' 人數是 : ' + classA.length);
classA.push('小夫');
console.log('轉學後 : ' + classA + ' 人數是 : ' + classA.length);
let ayvc0420img = [
    'https://www.ayvc0420.gq/images/html_title.png',
    'https://www.ayvc0420.gq/images/css_title.png',
    'https://www.ayvc0420.gq/images/bootstrap_title.png',
    'https://www.ayvc0420.gq/images/javascript_title.png'
]
document.write(ayvc0420img)

console.log('第一個 : ',ayvc0420img[0])
console.log('第二個 : ',ayvc0420img[1])
console.log('第三個 : ',ayvc0420img[2])
console.log('第四個 : ',ayvc0420img[3])

console.log('分隔');


const movieOne = {
    名字 : '蠟筆小新',
    熱門度 : '非常熱門',       //:是對應 ,是分隔
    主角幾歲 : '5歲',
    IQ : 1,
    EQ : 5
}

console.log(movieOne.IQ + movieOne.EQ);  //.是對應的資料

const movieImg = {
    images1 : '#',
    images2 : '#',
}

const wall = {
    movieOne,
    movieImg
}

console.log( wall)