let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');
let clear=document.querySelector('.btn-clear');
let equal=document.querySelector('.btn-equal');
let back=document.querySelector('.btn-back');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        screen.value+=value;
    })
});

equal.addEventListener('click',function(e){
    if(screen.value===''){
        screen.value="";
    }
    else{
        let ans=eval(screen.value);
        screen.value=ans;
    }
});

clear.addEventListener('click',function(e){
    screen.value="";
})
back.addEventListener('click',function(e){
    if(screen.value===''){
        screen.value="";
    }
    else{
        let str=screen.value;
        str=str.substr(0,str.length-1);
        screen.value=str;
        
    }
})

