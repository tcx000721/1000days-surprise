{/* <script src="js/jquery.min.js"></script>
//点按钮就可以进入另一个惊喜
$('#test').click(function(){
    $('#surprise').removeAttr("disabled");
  }); */}


//点击打开挑战
$("#btn").click(function(){
    $("#myModal").modal("show")
})

// //点击提交答题
// $("#submit").click(function(){
//     $("#myModal").modal("hide")
// })

var answer1 =  0;
var answer2 =  0;
var answer3 =  0;
var answer4 =  0;
var answer5 =  0;
var answer6 =  0;
var answer7 =  0;
var answer8 =  0;
var answer9 =  0;
var answer10=  0;
var answer10_1=0;
var answer10_2=0;
var answer10_3=0;
var answer10_4=0;

/**
 *  correct answers
 */
var q1answer=document.getElementById("q1option4")
q1answer.addEventListener('click',addOne1)

var q3answer=document.getElementById("q3option1")
q3answer.addEventListener('click',addOne3)

var q4answer=document.getElementById("q4option3")
q4answer.addEventListener('click',addOne4)

var q5answer=document.getElementById("q5option1")
q5answer.addEventListener('click',addOne5)

var q6answer=document.getElementById("q6option1")
q6answer.addEventListener('click',addOne6)

var q7answer=document.getElementById("q7option1")
q7answer.addEventListener('click',addOne7)

var q8answer=document.getElementById("q8option2")
q8answer.addEventListener('click',addOne8)

var q9answer=document.getElementById("q9option1")
q9answer.addEventListener('click',addOne9)

var q10answer=document.getElementById("q10option1")
q10answer.addEventListener('click',addOne10)

var q10answer2=document.getElementById("q10option2")
q10answer2.addEventListener('click',addOne10_2)

var q10answer3=document.getElementById("q10option3")
q10answer3.addEventListener('click',addOne10_3)

var q10answer4=document.getElementById("q10option4")
q10answer4.addEventListener('click',addOne10_4)

/**
 *  incorrect answers
 */
// q1
var q1a=document.getElementById("q1option1")
q1a.addEventListener('click',subOne1)
var q1b=document.getElementById("q1option2")
q1b.addEventListener('click',subOne1)
var q1c=document.getElementById("q1option3")
q1c.addEventListener('click',subOne1)

// q3
var q3b=document.getElementById("q3option2")
q3b.addEventListener('click',subOne3)
var q3c=document.getElementById("q3option3")
q3c.addEventListener('click',subOne3)
var q3d=document.getElementById("q3option4")
q3d.addEventListener('click',subOne3)

// q4
var q4a=document.getElementById("q4option1")
q4a.addEventListener('click',subOne4)
var q4b=document.getElementById("q4option2")
q4b.addEventListener('click',subOne4)
var q4d=document.getElementById("q4option4")
q4d.addEventListener('click',subOne4)

// q5
var q5b=document.getElementById("q5option2")
q5b.addEventListener('click',subOne5)
var q5c=document.getElementById("q5option3")
q5c.addEventListener('click',subOne5)

// q6
var q6b=document.getElementById("q6option2")
q6b.addEventListener('click',subOne6)
var q6c=document.getElementById("q6option3")
q6c.addEventListener('click',subOne6)
var q6d=document.getElementById("q6option4")
q6d.addEventListener('click',subOne6)

// q7
var q7b=document.getElementById("q7option2")
q7b.addEventListener('click',subOne7)
var q7c=document.getElementById("q7option3")
q7c.addEventListener('click',subOne7)
var q7d=document.getElementById("q7option4")
q7d.addEventListener('click',subOne7)

// q8
var q8a=document.getElementById("q8option1")
q8a.addEventListener('click',subOne8)
var q8c=document.getElementById("q8option3")
q8c.addEventListener('click',subOne8)
var q8d=document.getElementById("q8option4")
q8d.addEventListener('click',subOne8)

// q9
var q9b=document.getElementById("q9option2")
q9b.addEventListener('click',subOne9)
var q9c=document.getElementById("q9option3")
q9c.addEventListener('click',subOne9)
var q9d=document.getElementById("q9option4")
q9d.addEventListener('click',subOne9)

document.getElementById("submit").onclick = function(){
    var answer = 0;
    //q2
    if(document.getElementById("q2").value==581){
        answer2++
    }
    answer=answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9
    answer10=answer10_1+answer10_2+answer10_3+answer10_4
    if(answer==9&&answer10==4){
        alert("恭喜你通过了试炼！")
        //解锁另一个惊喜
        document.getElementById("surprise").removeAttribute("disabled")
    
    }else{
        alert("有题目答错了！！")
    }
    if(answer2==1)answer2--
}
function addOne1(){
    answer1++
    q1answer.removeEventListener('click',addOne1)
}
function addOne3(){
    answer3++
    q3answer.removeEventListener('click',addOne3)
}
function addOne4(){
    answer4++
    q4answer.removeEventListener('click',addOne4)
}
function addOne5(){
    answer5++
    q5answer.removeEventListener('click',addOne5)
}
function addOne6(){
    answer6++
    q6answer.removeEventListener('click',addOne6)
}
function addOne7(){
    answer7++
    q7answer.removeEventListener('click',addOne7)
}
function addOne8(){
    answer8++
    q8answer.removeEventListener('click',addOne8)
}
function addOne9(){
    answer9++
    q9answer.removeEventListener('click',addOne9)
}
function addOne10(){
    if(answer10_1==0){
        answer10_1++
    }else{
        answer10_1--
    }
}
function addOne10_2(){
    if(answer10_2==0){
        answer10_2++
    }else{
        answer10_2--
    }
}
function addOne10_3(){
    if(answer10_3==0){
        answer10_3++
    }else{
        answer10_3--
    }
}
function addOne10_4(){
    if(answer10_4==0){
        answer10_4++
    }else{
        answer10_4--
    }
}

function subOne1(){
    if(answer1==1){
        answer1--;
        q1answer.addEventListener('click',addOne1)
    }  
}
function subOne3(){
    if(answer3==1){
        answer3--;
        q3answer.addEventListener('click',addOne3)
    }  
}
function subOne4(){
    if(answer4==1){
        answer4--;
        q4answer.addEventListener('click',addOne4)
    }  
}
function subOne5(){
    if(answer5==1){
        answer5--;
        q5answer.addEventListener('click',addOne5)
    }  
}
function subOne6(){
    if(answer6==1){
        answer6--;
        q6answer.addEventListener('click',addOne6)
    }  
}
function subOne7(){
    if(answer7==1){
        answer7--;
        q7answer.addEventListener('click',addOne7)
    }  
}
function subOne8(){
    if(answer8==1){
        answer8--;
        q8answer.addEventListener('click',addOne8)
    }  
}
function subOne9(){
    if(answer9==1){
        answer9--;
        q9answer.addEventListener('click',addOne9)
    }  
}