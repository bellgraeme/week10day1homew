var guitars = ["fender", "Gibson", "Gretch", "PRS"];

console.log("guitars:", guitars);


var drums = new Array();
drums.push("Gretsch");
drums.push("Yamaha");

console.log("drums: ", drums);

console.log(guitars[0]);
console.log(guitars.length);
console.log(guitars.shift());

var  guitar = guitars.splice(0,1);
console.log(guitar);

var shiftedGuitar = guitars.shift();
console.log(shiftedGuitar);

guitars[90] = "Martin";
console.log(guitars);
console.log(guitars[89]);


