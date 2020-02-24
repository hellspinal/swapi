const math = require("math");
const input = require("prompt-sync")();
const target = math.round(math.random()*9);
const userNumber = Number(input("Please choose a number, mortal.").trim());
console.log(target)
console.log(userNumber)
if (userNumber!==target){
  
  if(userNumber > target){
    console.log("You have failed, fallen for the classic blunder. Also, your answer is greater than the chosen number.")
  }
  else if(userNumber < target){
    console.log("You have failed, peon, try again for a greater number.")
  }
  else{
    console.log("Inconceivable!")
  }
}
else{
  console.log("You have won, you fool, nothing comes from guessing the right number.")

}