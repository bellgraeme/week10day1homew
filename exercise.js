function speak(first, last){
  console.log("Howdy, I am", first , last);
}

function multi(a, b){
  return a * b;
}

function firstElement(array){
  return array.shift;
}

function print(array) {
  for (item of array){
    console.log(item);
  }
}

var animals = ["girafe", "elephant", "zebra"]

function transfer(array){
 var farm = []
  for(item of array){
    farm.push(item);
    console.log(item);
  }
  return farm;
}

console.log(transfer(animals))