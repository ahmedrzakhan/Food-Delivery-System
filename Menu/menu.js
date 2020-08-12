// const data = JSON.parse(localStorage.getItem("restaurant"));



// console.log(data)

// window.addEventListener("DOMContentLoaded", () => {
//   getQuery();
// });

// const getQuery = () => {
//   let query = window.location.search;

//   let url = new URLSearchParams(query);

//   let name = url.get("name");
//   // let header = document.querySelector("h1")
//   // header.textContent = name
//   console.log(name)

//   getRestaurant(name);
// };

// const getRestaurant = (name) => {
  
//   let item;
//   for (let i = 0; i < data.length; i++) {
//     if (name === data[i].name) {
//       item = data[i].menu;
//       console.log("item :", item)
//       break;
//     }
//   }

//   createUI(item);
// };

// const createUI = (item) => {
//   let menuDiv = document.getElementById("menu")

//   for (let i = 0; i < item.length; i++) {
//     let row = document.createElement("div")
//     row.setAttribute("class", "row container")

//     let col1 = document.createElement("div")
//     col1.setAttribute("class", "col-8 offset-1")

//     let itemName = document.createElement("p")
//     itemName.setAttribute("class", "font-weight-bolder mb-0")
//     itemName.textContent = item[i].item

//     let itemPrice = document.createElement("small")
//     itemPrice.setAttribute("class", "text-muted mt-0")
//     itemPrice.textContent = "Rs. " + item[i].price

//     col1.append(itemName,itemPrice)

//     let col2 = document.createElement("div")
//     col2.setAttribute("class", "col-2")

//     let btn = document.createElement("button")
//     btn.setAttribute("class","btn btn-outline-danger p-0 pl-1 pr-1")
//     btn.textContent = "ADD+"

//     col2.append(btn)

//     row.append(col1,col2)

//     menuDiv.append(row)
//   }
// };


const getData = () => JSON.parse(localStorage.getItem("restaurant"));

const data = getData();
console.log(data)

window.addEventListener("DOMContentLoaded", () => {
  getQuery();
});

const getQuery = () => {
  let query = window.location.search;

  let url = new URLSearchParams(query);

  let name = url.get("name");
  let header = document.getElementById("header")
  header.textContent = name
  getNavImage(name)
  
  console.log(name);

  getRestaurant(name);
};

const getNavImage = (name)=>{
  for(let i = 0; i < data.length; i++){
    if(name === data[i].name){
      let navImage = document.getElementById("navImage")
      let image = document.createElement("img")
  image.src = data[i].image
  image.alt = data[i].name
  image.setAttribute("class", "image")
      navImage.append(image)
  console.log(data[i].image)
    }
  }
  
  
}

const getRestaurant = (name) => {
  let item;
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      item = data[i].menu;
      
      console.log("item" ,item)
      break;
    }
    
  }
  createUI(item);
};

const createUI = (item) => {

  let menuDiv = document.getElementById("menu")

  for (let i = 0; i < item.length; i++) {
   
    let row = document.createElement("div")
    row.setAttribute("class", "row container")
  
    let col1 = document.createElement("div")
    col1.setAttribute("class", "col-8 offset-1")
  
    let itemName = document.createElement("p")
    itemName.setAttribute("class", "font-weight-bolder mb-0")
    itemName.textContent = item[i].item
  
    let itemPrice = document.createElement("small")
    itemPrice.setAttribute("class", "text-muted mt-0")
    itemPrice.textContent = "Rs. " + item[i].price
  
    col1.append(itemName,itemPrice)
  
    let col2 = document.createElement("div")
    col2.setAttribute("class", "col-2")
  
    let btn = document.createElement("button")
    btn.setAttribute("class","btn btn-outline-danger p-0 pl-1 pr-1")
    btn.textContent = "ADD+"
  
    col2.append(btn)
  
    row.append(col1,col2)
  
    menuDiv.append(row)
  }
  
  
};

{/* <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      class="image m-3" alt="Responsive image"></img> */}

