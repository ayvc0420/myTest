<style src="./style.css" scoped></style>
<template src="./template.html"></template>


<script>
export default {
    name:'input-test',
    props:{
        text:{
            type:String,
            required:true
        }
    },
    computed:{
        inputText:{
            get(){
                return this.text
            },
            set(val){
                this.$emit('update:text',val)
            }
        }
    }

}
</script>
