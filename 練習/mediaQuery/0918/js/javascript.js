
window.addEventListener('load' , function(){


    const content = document.getElementById("content")
    const date = document.getElementById("date")
    const time = document.getElementById("time")
    const add_btn = document.getElementById("add_btn") //新增
    const del_btn1 = document.getElementById("del_btn1") //最舊
    const del_btn2 = document.getElementById("del_btn2") //最新
    const list = document.getElementById("list") 
    
    const listContent = [];

    class Menu {
        append (){

        }
        revise (){
        let html_string= '';

        listContent.forEach(item => {

            html_string =  html_string + 
            `
            <div class="data">
                <div>
                    <p>內容 : ${item.content}</p>
                    <p>時間 : ${item.date} ${item.time}</p>
                </div>
            </div>
            `
        })
        

        list.innerHTML = html_string;
    }
    }
    console.log(Menu)
    const r1 = new Menu;
    console.log(r1)
    add_btn.addEventListener('click', function (){

        //推到最前面
        listContent.unshift({
            content : content.value,
            date : date.value,
            time : time.value
        })
        //推到最後面
        // listContent.push({
        //     content : content.value,
        //     date : date.value,
        //     time : time.value
        // })

        
        r1.revise()
    })
    
    del_btn1.addEventListener('click' , function (){

        // 移除最後面
        listContent.pop()

        r1.revise()
    })


    del_btn2.addEventListener('click' , function (){

        // 移除最前面
        listContent.shift()

        r1.revise()
    })
})