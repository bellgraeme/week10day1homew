var pets = ["dog", "cat", "dragon"];

for (var i = 0; i < pets.length; i++) {
 console.log( pets[i]);
}
//For Arrays
for( var pet of pets){
  console.log(pet);
}

//For objects
var examResults = {student1:3, student2: 5, student3: 8};
for(var key in examResults){
  console.log("examResults." + key +" = " + examResults[key]);
}

var x = 0;

while(x < 10){
  console.log("To infintiy and beyond!");
  x++
}


