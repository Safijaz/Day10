function myFunction (){
 var myMusic ={
     
001: {
     artist: "Billy Joel",
     title: "Piano Man",
     release_year: 1973,
     formats: {
         1: "CD",
         2: "8T",
         3: "LP"
              },
     gold:true 
    },
    
002:{ 
     artist:"Beirut",
     title: "Ripe Tide",
     release_year: 2013,
     id: 79,
     formats:{
         1: "CD",
         2: "8T",
         3: "LP"
             },
         }
           
}; return myMusic;

} myFunction()[2];
console.log(myFunction()[2]);
module.export = myFunction;

