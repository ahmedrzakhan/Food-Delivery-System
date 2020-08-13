"use strict";

const saveData = (items) =>
  localStorage.setItem("restaurant", JSON.stringify(items));

const loadData = () => JSON.parse(localStorage.getItem("restaurant")) || [];

let restaurant = loadData();

let index = restaurant.length - 1;
let menuId = 1;

console.log("first restaurant", restaurant);

window.addEventListener("DOMContentLoaded", () => {
  const addRestaurant = document.getElementById("addRestaurant");
  addRestaurant.addEventListener("click", getData);
});

const getData = () => {
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;

  addData(name, image);
  createTable();
};

const addData = (name, image) => {
  console.log("add Restaurant", restaurant);
  index++;

  let payload = {
    id: index + 1,
    name: name,
    menu: [],
    image: image,
  };

  restaurant.push(payload);
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
    getValues();
    createInputRow();
  });

  row.append(item, price, add);

  table.append(row);
};

const getValues = () => {
  let item = document.getElementById(`${menuId}"item"`).value;

  let price = document.getElementById(`${menuId}"price"`).value;

  let payload = {
    item,
    price: Number(price),
  };

  restaurant[index].menu.push(payload);

  saveData(restaurant);
  menuId++;
};
