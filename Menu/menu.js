"use strict";

const cart = [];

const getData = () => JSON.parse(localStorage.getItem("restaurant"));

const clearCart = () => localStorage.removeItem("cart");

const data = getData();

window.addEventListener("DOMContentLoaded", () => {
  clearCart();
  getQuery();
});

const getQuery = () => {
  let query = window.location.search;

  let url = new URLSearchParams(query);
  let name = url.get("name");
  getName(name);
  getRestaurant(name);
};

const getNameFromUrl = () => {
  let query = window.location.search;

  let url = new URLSearchParams(query);
  let name = url.get("name");

  return name;
};
const getName = (name) => {
  let cont = document.getElementById("restaurants");
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      let row = document.createElement("div");
      let col = document.createElement("div");
      col.setAttribute("class", "col-8 offset-2");

      let image = document.createElement("img");
      image.src = data[i].image;
      image.alt = data[i].alt;
      image.setAttribute("class", "my-4 image");

      let header = document.createElement("h3");
      header.setAttribute("class", "m-2 text-success");
      header.textContent = data[i].name;

      col.append(image, header);
      row.append(col);

      cont.append(row);
    }
  }
};

const getRestaurant = (name) => {
  let item;
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      item = data[i].menu;
      break;
    }
  }
  createUI(item);
};

const createUI = (item) => {
  let cont = document.getElementById("restaurants");
  let parentRow = document.createElement("div");
  parentRow.setAttribute("class", "row mt-4");

  let parentCol = document.createElement("div");
  parentCol.setAttribute("class", "col-8 offset-2");
  for (let i = 0; i < item.length; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    let col1 = document.createElement("div");
    col1.setAttribute("class", "col-8");

    let card1 = document.createElement("div");
    card1.setAttribute("class", "card border-0 shadow bg-white rounded ml-2");

    let cardBody1 = document.createElement("div");
    cardBody1.setAttribute("class", "card-body p-2");

    let para = document.createElement("p");
    para.setAttribute("class", "p-0 m-0");
    para.textContent = item[i].item;

    let price = document.createElement("small");
    price.setAttribute("class", "text-muted p-0 m-0");
    price.textContent = "Rs. " + item[i].price;

    cardBody1.append(para, price);
    card1.append(cardBody1);
    col1.append(card1);

    let col2 = document.createElement("div");
    col2.setAttribute("class", "col-4");

    let card2 = document.createElement("div");
    card2.setAttribute("class", "card border-0");

    let cardBody2 = document.createElement("div");
    cardBody2.setAttribute("class", "card-body");

    let button = document.createElement("div");
    button.setAttribute(
      "class",
      "btn btn-outline-danger shadow p-1 mb-2 float-right"
    );
    button.textContent = "ADD+";

    button.addEventListener("click", addItem);

    cardBody2.append(button);
    card2.append(cardBody2);
    col2.append(card2);
    row.append(col1, col2);

    parentCol.append(row);
    parentRow.append(parentCol);
    cont.append(parentRow);
  }
};

const addItem = () => {
  let text =
    event.target.parentElement.parentElement.parentElement.parentElement
      .children[0].textContent;

  let price = Number(text.split(".")[1].trim());

  let item = text.split(".")[0].split("Rs")[0];

  event.target.textContent = "Added";
  event.target.setAttribute(
    "class",
    "btn btn-outline-success shadow p-1 mb-2 float-right"
  );

  const payload = {
    price,
    item,
  };

  addToCart(payload);
};

const addToCart = (payload) => {
  cart.push(payload);

  localStorage.setItem("cart", JSON.stringify(cart));

  if (cart.length === 1) {
    createCart();
  }
};

const createCart = () => {
  const restaurants = document.getElementById("restaurants");
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  const col = document.createElement("div");
  row.setAttribute("class", "col-lg-2 offset-lg-9");
  const cart = document.getElementById("cart");
  const button = document.createElement("button");
  button.setAttribute("class", "btn btn-danger");
  button.textContent = "Go to Cart";

  button.addEventListener("click", navigateToCart);

  cart.append(button);
  col.append(cart);
  row.append(col);
  restaurants.append(row);
};

const navigateToCart = () => {

  let name = getNameFromUrl();

  let params = new URLSearchParams();
  params.set("name", name);

  let url = "../Bill/bill.html";
  window.location.assign(url + "?" + params.toString());
};
