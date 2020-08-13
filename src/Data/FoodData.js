export function formatPrice(price){
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 5
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 5.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 6
  },
  {
    name: "Veggie Pizza",
    img: "/img/healthy-pizza.jpeg",
    section: "Pizza",
    price: 6
  },
  {
    name: "Burger",
    img: "/img/burger.jpeg",
    section: "Sandwich",
    price: 3
  },
  {
    name: "Gyro",
    img: "/img/gyro.jpeg",
    section: "Sandwich",
    price: 5
  },
  {
    name: "Shrimp PoBoy",
    img: "/img/sandwich.jpeg",
    section: "Sandwich",
    price: 4
  },
  {
    name: "Melt",
    img: "/img/melt.jpeg",
    section: "Sandwich",
    price: 4
  },
  {
    name: "Fries",
    img: "/img/fries.jpeg",
    section: "Sides",
    price: 2
  },
  {
    name: "Garlic Sauce",
    img: "/img/garlic-sauce.jpeg",
    section: "Sides",
    price: 0.5
  },
  {
    name: "Ranch Sauce",
    img: "/img/ranch-sauce.jpeg",
    section: "Sides",
    price: 0.5
  },
  {
    name: "Marinara Sauce",
    img: "/img/marinara-sauce.jpeg",
    section: "Sides",
    price: 0.5
  },
  {
    price: 2.5,
    name: 'Soda',
    img: "/img/soda.jpeg",
    section: 'Drinks',
    choices: ['Coke', 'Coke Zero', 'Sprite', 'Root Beer', 'Fanta', 'Water']
  },
  {
    price: 5,
    name: 'Beer',
    img: "/img/beer.jpeg",
    section: 'Drinks',
    choices: ['Budweiser', 'Bud Light', 'Coors Light', 'Micholob Golden Light', 'White Claw', 'Sierra Nevada IPA', 'Odouls N/A']
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
