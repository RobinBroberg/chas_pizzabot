const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

const welcome = document.getElementById("welcome");
welcome.textContent = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

const orderStart = document.getElementById("orderStart");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const orderName = document.getElementById("pizzaInput").value.toLowerCase();
  const orderQuantity = parseFloat(
    document.getElementById("quantityInput").value
  );

  if (!checkOrderName(orderName)) {
    orderStart.textContent =
      "Sorry we don't serve that pizza, we have hawaiian, vegetarian and pepperoni pizza. Please try again.";
  } else if (!orderQuantity) {
    orderStart.textContent =
      "Please enter how many pizzas you would like to order.";
  } else {
    orderStart.textContent = `Great, I'll get started on your ${
      orderQuantity > 1 ? orderName + "s" : orderName
    } right away, it will cost you ${totalCost(
      orderQuantity
    )} kr. The ${pizzaString(orderQuantity)} will take ${cookingTime(
      orderQuantity
    )} minutes`;
  }
});

function checkOrderName(orderInput) {
  return (
    orderInput == "vegetarian" ||
    orderInput == "hawaiian" ||
    orderInput == "pepperoni"
  );
}

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
