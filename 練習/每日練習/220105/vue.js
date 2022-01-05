const NavComponent = {
    template:
    `
    <ul class="nav">
        <li><a href="#">menu1</a></li>
        <li><a href="#">menu2</a></li>
        <li><a href="#">menu3</a></li>
    </ul>
    `
}            
const ChloeComponent = {
    template:
    `
    <div class="banner">
        <img src='https://ayvc0420.github.io/images/sakamatachloe_card_01.webp'>
        <img src='https://ayvc0420.github.io/images/sakamatachloe_card_02.webp'>
        <img src='https://ayvc0420.github.io/images/sakamatachloe_card_03.webp'>
    </div>
    `
}
const PekoraComponent = {
    template:
    `
    <div class="banner">
        <img src='https://ayvc0420.github.io/images/usadapekora_card_01.jpg'>
        <img src='https://ayvc0420.github.io/images/usadapekora_card_02.jpg'>
        <img src='https://ayvc0420.github.io/images/usadapekora_card_03.jpg'>
    </div>
    `
}

const WrapComponent = {
    // 這邊根目錄必須為一個 template對象為components內的註冊對象
    template:
    `
    <div>
        <nav_component></nav_component>
        <chloe-component></chloe-component>
    </div>
    `,
    // 把components註冊再這個物件上
    components:{
        'nav_component':NavComponent,
        // 這邊用不同的命名方式主要是表達 _ - 都是符合W3C命名標準 可參考:https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
        'chloe-component':ChloeComponent
    }
}

// 全域註冊
// Vue.component('logo_banner',Banner)
// Vue.component('all_wrap',AllWrap)



new Vue({
    el:'#app',
    data(){
        return{
            width:600,
            height:300,
            bg1:'rgb(0,255,0)',
            fz1:20,
            level:5,
        }
    },
    // 區域註冊
    components:{
        // 用自訂命名方式綁定template
        'nav_component':NavComponent,
        'chloe_component':ChloeComponent,
        'pekora_component':PekoraComponent,
        // 採用ES6的方式綁定 但需要自動轉換大小寫 用-
        WrapComponent
    },
    computed:{
        // 預計綁定在template上
        wrapBind(){
            return{
                // 帶參數
                style:{
                    background:this.bg1,
                    'font-size':this.fz1/this.level+'rem'
                },
                // 可以嘗試將template改成input class改成check狀態
                class:'aaa'
            }
        },
    }
})