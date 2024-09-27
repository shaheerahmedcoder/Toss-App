var head=document.querySelector("#head-btn"); //considering heads as 1

var tail=document.querySelector("#tail-btn"); //considering tails as 2

var headings=document.querySelector("#output")

var img=document.querySelector("#img")

var num; //initializing a global variable!

function flip(coin){
    num=Math.ceil(Math.random(num)*2);

    if(num===1 && coin===1 || num===2 && coin===2){
        console.log("You won the Toss");
        headings.innerHTML="You won the Toss"
        
    }
    else{
        console.log("You lost the Toss");
        headings.innerHTML="You lost the Toss";
        
    }
    
if(num===1){
    console.log("Its a Heads");
}
else if(num===2){
    console.log("Its a Tails");
    
}

if(num===1){
    img.src="./images/cvoins (2).jpg" ;
}
else if(num===2){
    
    img.src="./images/cvoins (3).jpg"
}


}
