let names=
[
    {
        correct:"rakesh",
        wrong:"keshra"
    },
    {
        correct:"appu",
        wrong:"ppua"
    },
    {
        correct:"mahesh",
        wrong:"heshma"
    },
    {
        correct:"rajesh",
        wrong:"jeshra"
    },
    {
        correct:"vamsi",
        wrong:"msiva"
    },

]

let i=0;
let score=0;

function displayWord()
{
    document.querySelector("#j-word").innerText = 
    names[i].wrong;

    document.querySelector("#score").innerText=score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===names[i].correct.toLowerCase()){

                score++;

            }

            if(i==names.length-1){

                let msg="";

                if(score===5){
                    msg="Amazing game "+score;
                }
                else if(score===4){
                    msg="Good Game "+score
                }
                else if(score<4){
                    msg="Good Try "+score
                }

                alert(msg);

                location.reload();
            }
            else{
                i++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}










