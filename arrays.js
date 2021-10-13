// Objects
const name = "Matias";
const age = 30;
const gender = "M";
const nationality = "URU";
const stuff = "some";

// An objects

const product = {
  category: "sports",
  price: 30,
  name: "ball",
  description: "akjsbdkjabdkbaskjdbask",
  reviews: "...",
};

console.log("name", product.name);
console.log("type", product["name"]);

// console.log("A student", student);

// console.log("What is this?", student.sayHello);

// Arrays
const students = [
  "Ekaterina", // 0
  "Juan", // 1
  "Robin", // 2
  "Ali", // 3
  "Michiel",
  "Luis",
  "Johann",
  "Martina",
  "Eli", // 8
];

console.log("how many?", students.length);
//                     9          - 1  ===   8
const lastIndex = students.length - 1;

// console.log("which is the last student", students[lastIndex]);

const student = {
  name: "Matias",
  age: 30,
  gender: "M",
  nationality: "URU",
  sayHello: () => console.log("Hello matias"),
  hobbies: ["Gaming", "sailing", "Reading", "football"],
};

console.log(student.hobbies[2]);

const products = [
  {
    category: "Electronics",
    price: 30,
    name: "TV",
    description: "akjsbdkjabdkbaskjdbask",
    imageUrl:
      "https://m.media-amazon.com/images/I/81JC78QuD-S._AC_UL640_FMwebp_QL65_.jpg",
  },
  {
    category: "Electronics",
    price: 12,
    name: "game",
    description: "akjsbdkjabdkbaskjdbask",
  },
  {
    category: "sports",
    price: 20,
    name: "shorts",
    description: "akjsbdkjabdkbaskjdbask",
  },
  {
    category: "sports",
    price: 10,
    name: "ball",
    description: "akjsbdkjabdkbaskjdbask",
  },
];

// console.log("list of products", products[products.length - 1].price);
