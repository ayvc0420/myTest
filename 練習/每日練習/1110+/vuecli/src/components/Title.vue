<template>
    <h1 class="title_h1">{{title}}</h1>

</template>

<style scoped>
    .title_h1{
        font-size: 36px;
        color: cadetblue;
    }
</style>


<script>
export default {
    name:'TitleTest',
    // data(){
    //     return{
    //         title:'this is title test. - 2021/11/10'
    //     }
    // }
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>