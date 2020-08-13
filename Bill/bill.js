window.addEventListener("DOMContentLoaded", () => {
  getQuery();
});

const getData = () => JSON.parse(localStorage.getItem("restaurant"));

const data = getData();

const getCartData = () => JSON.parse(localStorage.getItem("cart"));

const cart = getCartData() || [];
console.log("cart", cart);

const getQuery = () => {
  let query = window.location.search;

  let url = new URLSearchParams(query);
  let name = url.get("name");
  console.log("name", name);
  getRestaurantData(name);
};

const getRestaurantData = (name) => {
  let item;
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      item = data[i];

      //   console.log("item", item);
      break;
    }
  }
  createBill(item);
};

const createBill = (item) => {
  console.log("item", item);
  const bill = document.getElementById("bill");
  let row = document.createElement("div");
  row.setAttribute("class", "row mt-5");

  let col = document.createElement("div");
  col.setAttribute("class", "col-lg-8 lg-offset-4");

  const div = document.createElement("div");

  const header = document.createElement("h4");
  header.setAttribute("class", "text-center");
  header.textContent = "Order Details";

  div.append(header);

  const name = document.createElement("h4");
  name.setAttribute("class", "text-center mt-3");
  name.textContent = item.name;

  div.append(name);

  var flexDiv = document.createElement("div");

  for (let i = 0; i < cart.length; i++) {
    flexDiv.setAttribute("class", "d-flex justify-content-between");

    let item = document.createElement("p");
    item.textContent = cart[i].item;
    let price = document.createElement("p");
    price.textContent = cart[i].price;

    flexDiv.append(item, price);
  }

  let totalBill = getTotalBill(cart);
  console.log("totalB", totalBill);

  const total = document.createElement("h5");
  total.setAttribute("class", "text-center mt-3");
  total.textContent =  `Total: ${totalBill}`;

  col.append(div, flexDiv, total);
  row.append(col);
  bill.append(row);
};

const getTotalBill = (data) => {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total + data[i].price;
  }
  return total;
};
