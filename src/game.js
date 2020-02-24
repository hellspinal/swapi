const math = require("math");
const target = math.round(math.random()*9);
const userNumber = 5
if (userNumber!==target){
  
  if(userNumber > target){
    console.log("You have failed, fallen for the classic blunder. Also, your answer is greater than the chosen number.")
  }
  if(userNumber < target){
    console.log("You have failed, peon, try again for a lesser number.")
  }
  console.log(target)
  console.log(userNumber)
}
else{
console.log("You have won, you fool, nothing comes from guessing the right number.")
console.log(target)
console.log(userNumber)
}