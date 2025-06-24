import { ImageSourcePropType } from "react-native";

type DishItem = {
  id:Number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

export const dishItem: DishItem[] = [
  {
    id:1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil.",
    price: 12.99,
    image: require("./images/categories/icons8-cupcake-emoji-96.png"),
  },
  {id:2,
    name: "Spaghetti Carbonara",
    description: "Pasta with creamy sauce, pancetta, and parmesan.",
    price: 10.49,
    image: require("./images/categories/icons8-cupcake-emoji-96.png"),
  },
  {
    id:3,
    name: "Cheeseburger",
    description: "Juicy beef patty with cheese, lettuce, and tomato.",
    price: 9.99,
    image: require("./images/categories/icons8-cupcake-emoji-96.png"),
  },
  {
    id:4,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with ganache.",
    price: 6.5,
    image: require("./images/categories/icons8-cupcake-emoji-96.png"),
  },
];

type FeatureRowProps = {
  title: any;
  description: any;
  restaurants: { id: number; name: string; image: any; description: any, dish:DishItem[] }[];
};

export const feature: FeatureRowProps = {
  title: "Featured Restaurants",
  description: "Popular restaurants near you",
  restaurants: [
    {
      id: 1,
      name: "Pizza Place",
      image: require("./images/restaurants/disadvantages-of-fast-food (1).webp"),
      description: "Enjoy our signature pizzas made with fresh ingredients.",
      dish:dishItem
    },
    {
      id: 2,
      name: "Burger House",
      image: require("./images/restaurants/disadvantages-of-fast-food (1).webp"),
      description: "Taste the best burgers in town with a variety of toppings.",
      dish:dishItem
    },
    {
      id: 3,
      name: "Sushi World",
      image: require("./images/restaurants/disadvantages-of-fast-food (1).webp"),
      dish:dishItem,
      description: "Fresh and authentic sushi prepared by expert chefs.",
    },
  ],
};