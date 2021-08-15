let correctAnswers=["E","E","E","E"];
let form=document.querySelector(".question-form");
 let result=document.querySelector(".result");


form.addEventListener('submit',e=>{
    e.preventDefault();
    let skor=0;
    let userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswer.forEach((answer,index  )=>{
         if(answer==correctAnswers[index]){
             skor +=25;
         }

    })
    //console.log(skor);
result.classList.remove("d-none");  
let puan=0;
let bastır=setInterval(() => {
    result.querySelector("span").textContent=`${skor}%`;
if(puan==skor){
    clearInterval(bastır);
}else{
    puan++;
}

},10);

})



