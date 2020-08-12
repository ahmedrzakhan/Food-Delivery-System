const restaurant = [
  {
    name: "Galaxy",
    menu: [
      { item: "Pasta", price: 1000 },
      { item: "Pizza", price: 1000 },
    ],
    image : "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Garland",
    menu: [
      { item: "Garlic", price: 1000 },
      { item: "Garlen", price: 1000 },
    ],
    image : "https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?size=626&ext=jpg",
  },
  {
    name: "Momos",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  {
    name: "Moana",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  {
    name: "Zaika",
    menu: [
      { item: "Pasta", price: 1000 },
      { item: "Pizza", price: 1000 },
    ],
    image : "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Frank's Chinese Restaurant",
    menu: [
      { item: "Garlic", price: 1000 },
      { item: "Garlen", price: 1000 },
    ],
    image : "https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?size=626&ext=jpg",
  },
  {
    name: "Pind Baluchi",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  {
    name: "Gyani's Restaurant",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  {
    name: "Blue Diamond",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  {
    name: "Neelam Restaurant",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
  
 

];


window.addEventListener("DOMContentLoaded", () => {
  displayRestaurants(restaurant)
  });


  


  function displayRestaurants(array){
    let cont = document.getElementById("restaurants")
    // creating row
    let row = document.createElement("div")
     row.setAttribute("class", "row")
    for(let i = 0; i < array.length;i++){
      //creating column for restaurants
      let col = document.createElement("div")
      col.setAttribute("class", "col-3 mb-2")
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
      cardFooter.setAttribute("class", "card-footer p-2")
      cardFooter.textContent = array[i].name
      
      card.append(image,cardFooter)

      col.append(card)

      row.append(col)
    }
    cont.append(row)
  }

  


