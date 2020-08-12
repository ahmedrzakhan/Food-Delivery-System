let restaurant = [
  {
    name: "Galaxy",
    menu: [
      { item: "Pasta", price: 200 },
      { item: "Pizza", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Garland",
    menu: [
      { item: "Garlic", price: 200 },
      { item: "Garlen", price: 200 },
    ],
    image : "https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?size=626&ext=jpg",
  },
  {
    name: "Momos",
    menu: [
      { item: "Momo", price: 200 },
      { item: "Mato", price: 200 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  {
    name: "Moana",
    menu: [
      { item: "Momo", price: 200 },
      { item: "Mato", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
  },
  {
    name: "Zaika",
    menu: [
      { item: "Pasta", price: 200 },
      { item: "Pizza", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Frank's Chinese Restaurant",
    menu: [
      { item: "Garlic", price: 200 },
      { item: "Garlen", price: 200 },
    ],
    image : "https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?size=626&ext=jpg",
  },
  {
    name: "Pind Baluchi",
    menu: [
      { item: "Momo", price: 200 },
      { item: "Mato", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Gyani's Restaurant",
    menu: [
      { item: "Momo", price: 200 },
      { item: "Mato", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
  },
  {
    name: "Blue Diamond",
    menu: [
      { item: "Momo", price: 200 },
      { item: "Mato", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
  },
  {
    name: "Neelam Restaurant",
    menu: [
      { item: "Momo", price: 200 },
      { item: "Mato", price: 200 },
    ],
    image : "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  
 

];




window.addEventListener("DOMContentLoaded", () => {
  displayRestaurants(restaurant)
  localStorage.setItem("restaurants",JSON.stringify(restaurant))

  let admin = document.getElementById("admin")
  admin.addEventListener("click", toAdminPage)
})


const toAdminPage = () =>{
  window.location.href = "Admin.html"
}


  


  function displayRestaurants(array){
    let cont = document.getElementById("restaurants")
    // creating row
    let row = document.createElement("div")
     row.setAttribute("class", "row container")
    for(let i = 0; i < array.length;i++){
      //creating column for restaurants
      let col = document.createElement("div")
      col.setAttribute("class", "col-3  mb-3")
      // creating card for each restaurant
      let card = document.createElement("div")
      card.setAttribute("class","card")
      // image of each restaurant
      let image = document.createElement("img")
      image.src = array[i].image
      image.alt = array[i].name
      image.setAttribute("class", "card-image-top image-size")
      image.style.borderRadius = "5px"
      // for name of restaurant
      let cardFooter = document.createElement("div")
      cardFooter.setAttribute("class", "card-footer p-2 text-truncate")
      cardFooter.textContent = array[i].name
     
      card.append(image,cardFooter)

      col.append(card)

      row.append(col)
    }
    cont.append(row)
  }

  


