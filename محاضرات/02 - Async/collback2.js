const products = require("./data/products.json");

const getproductsByname = (name, /* spi */cb) => {
  setTimeout(() => {
    const product = products.find((product) => product.name === name);
    // spi
    cb(product)
    //
  }, 2000);
};
// const handleGetProductsByname = (product) => {
//     console.log(product.price);
// }
// getproductsByname("Tea Ahmad");
console.log('Ahmad');
getproductsByname("Tea Ahmad",  (product) => {
    console.log(product.name);
});



