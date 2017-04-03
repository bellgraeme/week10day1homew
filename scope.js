// function talk(){
//   var name = "Craig";
//   console.log("my Name is", name)
// }

// talk()

// function walk(){
//   console.log(name, "is walking")
// }




// var name = 'Craig'

var talk = function(){
   name = "James" // Global scoped variable because no var keyword.
  console.log("My name is", name);
}

talk()
console.log(name)
