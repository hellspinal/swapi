const math = require("math");

const names=["Jeremy","David","Josh","Xerxes"];

var theBoss;
function assignName(value){
  theBoss=value;
}

/////////////////////////////////////////////////////////

for(let x=100000;x>=0;x--){
  const bru=(math.ceil(x/1000))
  console.log(bru)
  if (bru>80) {
    
  }
  else if ( bru<=80 && bru>60 ) {
    console.log("flag")
  }
  else if ( bru<=60 && bru>40 ) {
    console.log("light")
  }
  else if ( bru<=40 && bru>20) {
    console.log("boss yelling")
  }
  else if ( bru<=20 && bru>0 ) {
    console.log("Siren")
  }
  else {
    console.log("Machine Failure")
  }
}

function newCode() {
  const x = {
    someStuff: "new things",
    someOtherStuff: {
      x: "Complex new changes"
    }
  }
  return x.x;
}