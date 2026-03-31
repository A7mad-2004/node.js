const products = require("./data/products.json");

// async
// 1
// const getproducts = (name)=>{
//     const product = products.find(product =>{
//         return product.name === name;

//     })
//     return product

// }
2;
const getproducts = (name) => {
  setTimeout(() => {
    const product = products.find((product) => product.name === name);
    return product;
  }, 1000);
};
let product = getproducts("Tea Ahmad");
console.log(product);

/**
 * handling
 * 1. collback
 * 2. promise
 * 3. async/await
 */
