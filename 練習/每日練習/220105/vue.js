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
const InputComponent = {
    template:
    `
    <table>
        <input type="checkbox" id="imgMove" v-bind="$attrs">
        <input type="checkbox" >
        <input type="checkbox" >
        <input type="checkbox" v-bind="$attrs" >
    </table>
    `,
    // 在多個input的情況下直接對template標籤下參數會下在根元素 因此取消繼承inheritAttrs:false 
    // 在需要自帶預設參數的input標籤加上$attrs (style與class不適用)
    // 但是參數是需要賦予值的 無法使用checked 而是需要checked="checked"
    inheritAttrs:false
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
            time:200,
        }
    },
    // 區域註冊
    components:{
        // 用自訂命名方式綁定template
        'nav_component':NavComponent,
        'chloe_component':ChloeComponent,
        'pekora_component':PekoraComponent,
        'input_component':InputComponent,
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