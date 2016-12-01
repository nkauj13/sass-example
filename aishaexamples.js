// var statement = "I write JavaScript!"; //semicolon is our period to every statement aka command
//
// function writeStatement() {
//   console.log(statement);
// } //definition of the function
//
// writeStatement(); //calling the function is a statement
//
// function makePizza(chosenCrust, chosenToppings) {
//   var toppings = ""; //this is a string
//   chosenToppings.forEach(function(topping, index, arr) { //forEach is only for arrays. Index is a reference to the commas and. Arr references the array
//     if (index === arr.length-1) { //the index of the last array is going 1 less than
//       toppings += topping;
//     } else if (index === arr.length-2) {
//       toppings += topping + ", and ";
//     } else {
//       toppings += topping + ", ";
//     }
//   });
//   console.log("Here's your " + toppings + " pizza with a " + chosenCrust + " crust!");
// }

function makePizza(groupOrder) {
  groupOrder.forEach(function(individualOrder) {
  var toppings = ""; //this is a string
  individualOrder.toppings.forEach(function(topping, index, arr) { //forEach is only for arrays. Index is a reference to the commas and. Arr references the array
    if (index === arr.length-1) { //the index of the last array is going 1 less than
      toppings += topping;
    } else if (index === arr.length-2) {
      toppings += topping + ", and ";
    } else {
      toppings += topping + ", ";
    }
  });
  console.log(individualOrder.name + " ordered a " + toppings + " pizza with a " + individualOrder.crust + " crust");
});
}

var ourOrders = [
  {
    name: "Aisha",
    crust: "cheesy pretzel",
    toppings: ["goat cheese", "figs", "diced tomatoes"]
  },
  {
    name: "Travis",
    crust: "parmesan",
    toppings: ["pepperoni", "bacon"]
  },
  {
    name: "Deleana",
    crust: "garlic cheese",
    toppings: ["anchovies", "black olives", "pepperoni"]
  },
  {
    name: "Gao",
    crust: "cajun",
    toppings: ["italian sausage", "jalepenos"]
  }
];

makePizza("ourOrders");

//makePizza("butter cheese" , ["pepperoni", "black olives", "bacon", "bannana peppers", "anchovies", "pineapple"]);
//first datatype needs to be a string, 2nd string needs to be an array. Order is going to follow the function in line 9.
