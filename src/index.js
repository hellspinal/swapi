const names=["Jeremy","David","Josh","Xerxes"];

var theBoss;
function assignName(value){
  theBoss=value;
}

/////////////////////////////////////////////////////////

for(let x=0;x<names.length;x++){
  assignName(names[x])
  console.log(theBoss)
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