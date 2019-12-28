const newArray = ["cat", "dog", 'goose', "AR-15", "unicorn", "aaaaaaa"];

async function waitForTheSignal() {
  for( let x=0; x < newArray.length; x++ ) {
    console.log("Look, I've got a " + newArray[x]);
    await sleep(1000);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

waitForTheSignal();

