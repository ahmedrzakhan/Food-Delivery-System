"use strict";

const saveData = (items) =>
  localStorage.setItem("restaurant", JSON.stringify(items));

const loadData = () =>
  JSON.parse(localStorage.getItem("restaurant")) || [{ menu: [] }];

let restaurant = loadData();

let index = -1;
let menuId = 1;

console.log("first restaurant", restaurant);

window.addEventListener("DOMContentLoaded", () => {
  const addRestaurant = document.getElementById("addRestaurant");
  addRestaurant.addEventListener("click", () => {
    getName();
  });

  let dashboard = document.getElementById("dashboard");
  dashboard.addEventListener("click", toDashboard);
});

const toDashboard = () => {
  window.location.href = "dashboard.html";
};

const getName = () => {
  const name = document.getElementById("name").value;

  addName(name);
  createTable();
};

const addName = (name) => {

  console.log("add Restaurant", restaurant);
  console.log("name", name);
  index++;
  console.log("index", index);
  restaurant[index] = name;
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
  item.innerHTML = `<input type="text" id = ${menuId}"item" class="form-control" >`;

  const price = document.createElement("td");
  price.innerHTML = `<input type="text" id = ${menuId}"price" class="form-control" >`;

  var add = document.createElement("button");
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
  let item = document.getElementById(`${menuId}"item"`).value;
  console.log("item", item);

  let price = document.getElementById(`${menuId}"price"`).value;
  console.log("price", price);

  let payload = {
    item,
    price: Number(price),
  };

  restaurant[index].menu.push(payload);

  saveData(restaurant);

  console.log("restaurant", restaurant);
  menuId++;
};
