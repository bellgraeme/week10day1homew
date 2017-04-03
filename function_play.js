//function hello(){
//  console.log("Hello");
//}


//hello();


// var hello = function (){
//   console.log("Hello");
// }


// hello();


var hello = function(){
  return "hello!"
}


console.log("return value:", hello());


var mood = function (name, mood, weather) {
  console.log(name,  "is feeling", mood ,  "and  its" , weather , "outside")
}

// mood("Craig", "still pretty hungry")


// mood("Craig");


function add(a,b){
  return a + b;
}

var sum = add(2, 3, 4,5,6,10);


console.log("the sum is:" , sum)



sum = function () {
  var total = 0;
  for(var i = 0; i < arguments.length ; i++){
    total += arguments[i];
  }
  return total;
}


var total = sum(1,2,3,4,5,6,7,8,9)

console.log("total:", total);


var hello = function () {
  console.log('Hello')
  }


var add = function (a, b) {
  return a + b;
  }

  var javascriptIsAwesome = function(functionToInvoke){
    console.log(functionToInvoke(2,3));
  }


  javascriptIsAwesome( add );

  javascriptIsAwesome( console.log );










