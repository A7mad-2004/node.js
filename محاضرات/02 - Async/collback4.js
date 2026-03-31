const products = require("./data/products.json");
const stores = require("./data/stores.json");
const cities = require("./data/cities.json");

//// async process
const getproductsByname = (name, cb) => {
  setTimeout(() => {
    const pruduct = products.find((product) => product.name === name);
    if (pruduct) {
      cb(undefined, pruduct);
    } else {
      err = { message: `product not found` };
      cb(err, null);
    }
  }, 1500);
};

///// store by id
///////// async process
const getStoreById = (id, cb) => {
  setTimeout(() => {
    const store = stores.find((store) => store.id === id);
    if (store) {
      cb(undefined, store);
    } else {
      err = { message: `store not found` };
      cb(err, null);
    }
  }, 2000);
};

// async process
/////////// city by name
const getCityByname = (name, cb) => {
  setTimeout(() => {
    const city = cities.find((city) => city.name === name);
    if (city) {
      cb(undefined, city);
    } else {
      err = { message: `city not found` };
      cb(err);
    }
  }, 500);
};

///////////////////////
//// collback function nested
const testproductName = `Tea Ahmad`;

getproductsByname(testproductName, (err, product) => {
  if (err) {
    console.log(err.message);
  } else {
    const storeId = product.store_id;
    getStoreById(storeId, (err, store) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`Stores is : `, store);
        const cityname = store.city;
        getCityByname(cityname, (err, city) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log(`City is : `, city.name);
          }
        });
      }
    });
  }
});
