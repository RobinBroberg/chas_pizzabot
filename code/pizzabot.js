const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

function checkOrderName(orderInput) {
  if (
    orderInput == "vegetarian" ||
    orderInput == "hawaiian" ||
    orderInput == "pepperoni"
  ) {
    return true;
  }
}

let orderName;
while (true) {
  orderName = prompt(
    "Enter the name of the pizza you want to order today."
  ).toLowerCase();

  if (!checkOrderName(orderName)) {
    alert(
      "Sorry we dont serve that pizza, we have hawaiian, vegetarian and pepperoni pizza. Please try again."
    );
  } else {
    break;
  }
}

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

function totalCost(quantity) {
  return quantity * pizzaPrice;
}

function pizzaString(quantity) {
  return quantity > 1 ? "pizzas" : "pizza";
}

function cookingTime(quantity) {
  if (quantity <= 2) {
    return 10;
  } else if (quantity < 6) {
    return 15;
  } else {
    return 20;
  }
}

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost you ${totalCost(
    orderQuantity
  )} kr. The ${pizzaString(orderQuantity)} will take ${cookingTime(
    orderQuantity
  )} minutes`
);
