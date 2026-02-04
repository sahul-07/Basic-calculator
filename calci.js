let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');
let answer="";

let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        
       if(e.target.innerHTML == '='){
            if(answer.includes('X')){
            let cons= answer.replace("X","*");
            answer = eval(cons);
            input.value = answer;

        }else{
            answer = eval(answer);
            input.value = answer;
        }
        }
        else if(e.target.innerHTML=='AC'){
            answer="";
            input.value=answer;
        }
        else if(e.target.innerHTML=='DEL'){
            answer = answer.substring(0,answer.length-1);
            input.value=answer;
        }
        else{
        
            answer+=e.target.innerHTML;
            input.value = answer;
        }
    })
})
