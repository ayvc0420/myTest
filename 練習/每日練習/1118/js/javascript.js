;(function(){

    const i1 = document.querySelector('.i1')
    const i2 = document.querySelector('.i2')
    const scope = document.querySelector('.scope')
    const guess = document.querySelector('.guess')
    const guessInput = document.getElementById('guessInput')
    const guessBtn = document.querySelector('.guess button')
    const rand = document.getElementById('rand')
    const view = document.querySelector('.view')
    
    const numberTest = /^0-9$/
    
    const inputMin = document.getElementById('inputMin') 
    const inputMax = document.getElementById('inputMax')
    // 轉換後小的數字
    let numberMin;
    // 轉換後大得數字 
    let numberMax;
    // 介於大的數字
    let answerMax;
    // 介於小的數字
    let answerMin;
    // 猜多少次
    let count = 0;
    // 答案
    let answer;
    // 監聽Enter
    inputMin.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            console.log('ok')
            randRun()
        }
    })
    // 監聽Enter
    inputMax.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            console.log('ok')
            randRun()
        }
    })
    rand.addEventListener('click',randRun)

    function randRun(){
        numberMin = inputMin.value
        numberMin = parseInt(numberMin,10)
        numberMax = inputMax.value
        numberMax = parseInt(numberMax,10)
        console.log('min',numberMin)
        console.log('max',numberMax)
        answerMax = numberMax;
        answerMin = numberMin;
        
        if(numberMin >= numberMax){
            err()
            console.log('min>=max','min:',numberMin,'max:',numberMax)
        }else if(numberMin === 0 && numberMax === 0){
            console.log('Min!==0',numberMin !== 0 )
            console.log('Max!==0',numberMax !== 0 )
            err()
        }else if(isNaN(inputMin.value) || isNaN(inputMax.value)){
            console.log('isNaN(inputMin.value):',isNaN(inputMin.value))
            console.log('isNaN(inputMax.value):',isNaN(inputMax.value))
            err()
        }else if(inputMin.value === '' || inputMax.value === ''){
            console.log('inputMin.value === \'\':',inputMin.value === '')
            console.log('inputMax.value === \'\':',inputMax.value === '')
            err()
        }else if(!numberTest.test(numberMin)&&!numberTest.test(numberMax)){ 
            console.log('ok')
            i1.classList.remove('error')
            i2.classList.remove('error')
            inputMin.classList.remove('input_error')
            inputMax.classList.remove('input_error')
            guessInput.value='';
            answer = numberGet(numberMin,numberMax);
            scope.innerHTML=
            `
                <span>當前的數字範圍是${numberMin}~${numberMax}</span>
            `
            // 清空
            view.innerHTML=
            `
                
            `
            count =0;
            guess.style.display = 'flex';
            rand.style.bottom = '-10px';
            i1.style.marginBottom = '0'
            i2.style.marginBottom = '0'
        }else{
            console.log('else')
            err()
        }
    }



    function numberGet(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function err(){
        i1.classList.add('error')
        i2.classList.add('error')
        inputMin.classList.add('input_error')
        inputMax.classList.add('input_error')
        scope.innerHTML=
        `
        
        `
        guess.style.display = 'none';
        view.innerHTML=
        `
            
        `
        rand.style.bottom = '-20px';
        i1.style.marginBottom = '100px'
        i2.style.marginBottom = '100px'
    }
    guessInput.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            guessRun()
        }
    })

    guessBtn.addEventListener('click',guessRun)
    function guessRun(){
        let v = guessInput.value;
        v = parseInt(v,10);
        console.log(v)
        if(v === answer){
            count +=1;
            view.innerHTML=
            `
                <span>答案是:${answer}，你一共答了 <span style="font-size:32px;color:#55ff0f">${count}</span>次 !(含本次)</span><br>
                <span>再次產生新的亂數可以重新遊玩</span>
            `
            guess.style.display = 'none';
            if(count === 1){
                view.innerHTML+=`<br><span style="color:#c9fc64;  font-weight:900">太扯了，竟然一次就猜中。如果你不是把範圍設非常小的話，那你今天的運氣一定非常好!</span>`
            }
        }else if(v < answerMin || v > answerMax){
            view.innerHTML=
            `
                <span>輸入的數字錯誤!範圍是${answerMin}~${answerMax}</span>
            `
        }else if(v > answer){
            answerMax = v;
            count +=1;
            view.innerHTML=
            `
                <span>猜的數字太高了，試著稍微降低吧!範圍是${answerMin}~${answerMax}</span>
            `
        }else if(v < answer){
            answerMin = v;
            count +=1;
            view.innerHTML=
            `
                <span>猜的數字太低了，試著稍微提高吧!範圍是${answerMin}~${answerMax}</span>
            `
        }else{
            view.innerHTML=
            `
                <span>發生未預期錯誤，請確認輸入是否為數字。</span>
            `
        }

    }
})()



