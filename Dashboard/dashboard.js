"use strict";

const getData = () => JSON.parse(localStorage.getItem("restaurant"));

window.addEventListener("DOMContentLoaded", () => {
  let admin = document.getElementById("admin");
  admin.addEventListener("click", toAdminPage);
});

const toAdminPage = () => {
  window.location.href = "Admin.html";
};

window.addEventListener("DOMContentLoaded", () => {
  const data = getData();
  displayRestaurants(data);
});

function displayRestaurants(array) {
  let cont = document.getElementById("restaurants");
  // creating row
  let row = document.createElement("div");
  row.setAttribute("class", "row container");
  for (let i = 0; i < array.length; i++) {
    //creating column for restaurants
    let col = document.createElement("div");
    col.setAttribute("class", "col-3  mb-3");
    // creating card for each restaurant
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.addEventListener("click", goToMenu);
    // image of each restaurant
    let image = document.createElement("img");
    image.src = array[i].image;
    image.alt = array[i].name;
    image.setAttribute("class", "card-image-top image-size");
    image.style.borderRadius = "5px";
    // for name of restaurant
    let cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer p-2 text-truncate");
    cardFooter.textContent = array[i].name;

    card.append(image, cardFooter);
    col.append(card);
    row.append(col);
  }
  cont.append(row);
}

const goToMenu = () => {
  const data = getData();
  let query;
  const name = event.target.textContent;
  const alt = event.target.parentElement.textContent;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name || data[i].name === alt) {
      query = data[i].name;
      break;
    }
  }

  createQuery(query);
};

const createQuery = (name) => {
  let params = new URLSearchParams();
  params.set("name", name);

  let url = "../Menu/menu.html";
  window.location.assign(url + "?" + params.toString());
};
