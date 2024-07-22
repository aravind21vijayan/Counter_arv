"use strict"
let value = 0;


document.querySelector('.decrement').addEventListener('click',function counter(){


     value = document.querySelector('.count').textContent;
     value--;
     if (value<0){
        alert("cannot be decremented further!!");
     }
     else{
     document.querySelector('.count').textContent = value;
     }
})


document.querySelector('.increment').addEventListener('click',function counter(){


    value = document.querySelector('.count').textContent;
    value++;
    
    document.querySelector('.count').textContent = value;

})