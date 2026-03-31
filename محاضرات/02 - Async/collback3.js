const products = require("./data/products.json");
const stores = require("./data/stores.json");
const cities = require("./data/cities.json");

//// async process
const getproductsByname = (name, cb) => {
  setTimeout(() => {
    const pruduct = products.find((product) => product.name === name);
    cb(pruduct);
  }, 1500);
};

const handleGetProductsByname = (product) => {
  console.log(`product : `, product.discount);
};
getproductsByname("Tea Ahmad", handleGetProductsByname);

/////////// sync process
// const getStoreById = (id) => {
//         const store = stores.find(store => store.id === id)
//         return store.name
// }
// console.log(getStoreById(1));

////////////////////////////////////////////////
///// store by id
///////// async process
const getStoreById = (id, cb) => {
  setTimeout(() => {
    const store = stores.find((store) => store.id === id);
    // spi
    cb(store);
    // end spi
  }, 2000);
};

////// collback function
const handleGetStoreById = (store) => {
  console.log(`store : `, store.name);
};
getStoreById(2, handleGetStoreById);

////////////////////////////////////////

// async process //
/////////// city by id
const getCityById = (id, cb) => {
  setTimeout(() => {

    const city = cities.find((city) => city.id === id);
    if (city) {
        cb(undefined, city);
    }else{
        err = { message: `city not found` };
        cb(err, null);
    }
  }, 4000);
};

const handleGetCityById = (err , city) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`city is : `, city.name);
  }
};
getCityById(5, handleGetCityById);
