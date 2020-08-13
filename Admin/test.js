"use strict";

const restaurant = [
  {
    name: "Galaxy",
    menu: [
      { item: "Pasta", price: 1000 },
      { item: "Pizza", price: 1000 },
    ],
  },

  {
    name: "Garland",
    menu: [
      { item: "Garlic", price: 1000 },
      { item: "Garlen", price: 1000 },
    ],
  },

  {
    name: "Momos",
    menu: [
      { item: "Momo", price: 1000 },
      { item: "Mato", price: 1000 },
    ],
  },

  {
    name: "Motnas",
    menu: [
      { item: "Motna", price: 1000 },
      { item: "Motni", price: 1000 },
    ],
  },
];

for (let i = 0; i < restaurant.length; i++) {
  let name = restaurant[i].name;
  console.log(i);

  for (let j = 0; j < restaurant[i].menu.length; j++) {
    console.log(i);

    // console.log(restaurant[i].menu[j].item);
    // console.log(restaurant[i].menu[j].price);

    // console.log(restaurant[i].menu[j]);
  }
}
