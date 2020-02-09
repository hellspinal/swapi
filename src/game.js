const math = require("math");
const target = math.round(math.random()*9);
const userNumber = 5
while(userNumber!==target){
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  if(userNumber > target){
    console.log("you have failed, fallen for the classic blunder. Also, you're answer is greater than the chosen number.")
  }

  console.log(userNumber)
}

