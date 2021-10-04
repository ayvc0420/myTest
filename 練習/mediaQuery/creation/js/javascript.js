

    const content2 = document.querySelector('.content2 article')
    const content3 = document.querySelector('.content3 article')

    
    //查看當前狀態
    window.addEventListener('scroll',function(){
        const content2_top = document.querySelector('.content2 article').offsetTop;
        const content3_top = document.querySelector('.content3 article').offsetTop;
        console.log('top2',content2_top)
        console.log('top3',content3_top)
        const now_height = document.documentElement.scrollTop;
        console.log('目前網頁高度',now_height)
        const now_width = document.documentElement.scrollWidth;
        console.log('目前網頁寬度',now_width)
        const height = document.documentElement.clientHeight;
        console.log('目前網頁可視高度',height)

        const control2 = content2_top - height <= now_height;
        const control3 = content3_top - height <= now_height;
        console.log('2',control2)
        console.log('3',control3)
        if(control2 === true){
            content2.classList.add('content_ani')
        }
        if(control3 === true){
            content3.classList.add('content_ani')
        }

    })

    //取得元素

    //取得元素離頂部位置

    console.log('1',content1_top)
    console.log('2',content2_top)
    console.log('3',content3_top)

