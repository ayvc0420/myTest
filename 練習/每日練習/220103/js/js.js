document.querySelector('form').addEventListener('submit',function(e){
    const acc = document.getElementById('acc')
    const pas = document.getElementById('pas')
    if(!acc.value || !pas.value){
        // document.querySelector('form').reset()
    }else{
        e.preventDefault()
        let iframe = document.createElement('iframe')
        iframe.src="./new.html"
        iframe.style.margin = '20px 0'
        document.querySelector('body').appendChild(iframe)
    }
})
