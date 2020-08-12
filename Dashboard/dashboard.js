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
    name: "Momos",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
    image : "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-735x413.jpg",
  },
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
    name: "Momos",
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

    for(let i = 0; i < array.length; i += 4){

      let cardDeck = document.createElement("div")
      cardDeck.setAttribute("class", "card-deck")

      for(let j = 0; j < 4; j++){

        let card = document.createElement("div")
        card.setAttribute("class", "card")
        card.style.borderRadius = "5px"
  
        let image = document.createElement("img")
        image.src = array[j].image
        image.alt = array[j].name
        image.setAttribute("class", "card-image-top")
        image.setAttribute("class", "image-size")
        image.style.borderRadius = "5px"
  
        let cardFooter = document.createElement("div")
        cardFooter.setAttribute("class", "card-footer")
  
        let name = document.createElement("p")
        name.setAttribute("class","text-muted")
        name.textContent = array[j].name
  
        cardFooter.append(name)
  
        card.append(image,cardFooter)

        cardDeck.append(card)
      }
      cont.append(cardDeck)
     
   }
   
  }



