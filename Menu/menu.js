const getData = () => JSON.parse(localStorage.getItem("restaurant"));

const data = getData();

window.addEventListener("DOMContentLoaded", () => {
  getQuery();
});

const getQuery = () => {
  let query = window.location.search;

  let url = new URLSearchParams(query);

  let name = url.get("name");
  console.log(name);

  getRestaurant(name);
};

const getRestaurant = (name) => {
  let item;
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      item = data[i];
      break;
    }
  }
  createUI(item);
};

const createUI = (item) => {
  console.log(item);
};
