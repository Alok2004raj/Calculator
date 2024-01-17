let result=document.querySelector("#result");
let buttons=document.querySelectorAll(".button");
let buttone=document.querySelector(".buttone");
let string="";

buttons.forEach((btn)=>{
   
   btn.addEventListener('click',()=>{

      if(btn.innerHTML=== '='){
      string=eval(string);
      result.value=string;
      }

      else if(btn.innerHTML==='c'){
        string="";
        result.value=string;
        }
        else if(btn.innerHTML==='X'){
            string=string.slice(0,-1);
            result.value=string;
            }
        
        else{
            string+=btn.innerHTML;
        result.value=string;
        }
       
       
           
          
           
   })
})



