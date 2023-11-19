const random_number = Math.floor(Math.random()*10) + 1;
const predict= prompt("predict a number from 1-10?");
if(random_number===predict){
    alert("congratulations, you win")
} else{
    alert("you loss, pls try again")
}
if (predict > 10){
    alert("follow the instruction, your predict number shouldnt be greater than 10")
}