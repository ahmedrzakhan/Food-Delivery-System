"use strict";

let menu = [];
let restaurant = [{ menu }];
let index = 0;
let j = 0;

window.addEventListener("DOMContentLoaded", () => {
  const addRestaurant = document.getElementById("addRestaurant");
  addRestaurant.addEventListener("click", getName);
});

const getName = () => {
  const name = document.getElementById("name").value;

  addName(name);
  createTable();
};

const addName = (name) => {
  restaurant[index].name = name;
  let pay = {
    item: "qq",
    price: 100,
  };
  //   restaurant[index].menu.push(pay);

  console.log("restaurant", restaurant);
};

const createTable = () => {
  const table = document.getElementById("menuTable");
  table.innerHTML = "";

  const header = createRow({ item: "Item", price: "Price", action: "Action" });
  header.setAttribute("class", "bg-dark text-light font-weight-bold");
  table.append(header);

  createInputRow();
};

const createRow = (data) => {
  const row = document.createElement("tr");

  const item = document.createElement("td");
  item.textContent = data.item;

  const price = document.createElement("td");
  price.textContent = data.price;

  const action = document.createElement("td");
  action.textContent = data.action;

  row.append(item, price, action);

  return row;
};

const createInputRow = () => {
  const table = document.getElementById("menuTable");

  const row = document.createElement("tr");
  const item = document.createElement("td");
  item.name = "item-value";
  item.innerHTML = `<input type="text">`;

  const price = document.createElement("td");
  price.name = "price-value";
  price.innerHTML = `<input type="text">`;

  var add = document.createElement("button");
  add.name = "button";
  add.setAttribute("class", "btn btn-success btn-sm mt-2");
  add.textContent = "Add";
  add.addEventListener("click", () => {
    test();
    createInputRow();
  });

  row.append(item, price, add);

  table.append(row);
};

const test = () => {
  let item = event.target.previousElementSibling.value;
  console.log("item", item);
};
