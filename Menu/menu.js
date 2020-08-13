"use strict";

const getData = () => JSON.parse(localStorage.getItem("restaurant"));

const data = getData();
console.log(data);

window.addEventListener("DOMContentLoaded", () => {
  getQuery();
});

const getQuery = () => {
  let query = window.location.search;

  let url = new URLSearchParams(query);
  let name = url.get("name");
  getName(name);
  getRestaurant(name);
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
      header.setAttribute("class", "m-2");
      header.textContent = data[i].name;
      console.log(data[i].image);

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

      console.log("item", item);
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

    cardBody2.append(button);
    card2.append(cardBody2);
    col2.append(card2);
    row.append(col1, col2);

    parentCol.append(row);
    parentRow.append(parentCol);
    cont.append(parentRow);
  }
};
