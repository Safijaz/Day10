//Create lion object here
var lion =
 { name:"Simba",
  legs: 4, 
  tails: 1
 };
//End lion object here
function myFunction (roar) {
// Only change code below this line 
    lion["roar"]= "roar-roar";
    return lion;
  
 // Only change code above this line 
}
 console.log(myFunction(lion));
 module.export = {lion, myFunction};