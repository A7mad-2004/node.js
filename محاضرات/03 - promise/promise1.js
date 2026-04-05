const fs = require("fs");

// collback function
const getProductByName = (name, CB) => {
  setTimeout(() => {
    // read data from file
    const data = fs.readFileSync("../02 - Async/data/products.json");
    // parse data to json
    const products = JSON.parse(data);
    // find product by name
    const product = products.find((product) => product.name === name);
    if (product) {
      CB(undefined, product);
    } else {
      err = { message: `product not found` };
      CB(err, undefined);
    }
  }, 500);
};
// test product name
getProductByName("Tea Ahmad", (err, product) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(product.name);
  }
});
// end collbeack function

// promise function
const getProductByName2 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // read data from file
      const data = fs.readFileSync("../02 - Async/data/products.json");
      // parse data to json
      const products = JSON.parse(data);
      // find product by name
      const product = products.find((product) => product.name === name);

      if (product) {
        resolve(product);
      } else {
        err = { message: `product not found` };
        reject(err);
      }
    }, 500);
  });
};
getProductByName2("Tea Ahmad")
  // resolve
  .then((data) => {
    console.log(data.name);
  })
  // reject
  .catch((err) => {
    console.log(err.message);
  });

// end promise function

// promise function
const getStoreById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // read data from file
      const data = fs.readFileSync("../02 - Async/data/stores.json");
      // parse data to json
      const stores = JSON.parse(data);
      // finde store by id
      const store = stores.find((store) => store.id === id);
      if (store) {
        resolve(store);
      } else {
        err = { message: `store not found` };
        reject(err);
      }
    }, 500);
  });
};
// get city by name
const getCityByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // read data from file
      const data = fs.readFileSync("../02 - Async/data/cities.json");
      // parse data to json
      const cities = JSON.parse(data);
      // finde city by name
      const city = cities.find((city) => city.name === name);
      if (city) {
        resolve(city);
      } else {
        err = { message: ` city not found` };
        reject(err);
      }
    }, 500);
  });
};

getStoreById(1)
  // resolve
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log(err.message);
  });

// end promise function

// nested promise hell
getProductByName2("Tea Ahmad")
  // resolve
  .then((product) => {
    storeId = product.store_id;
    getStoreById(storeId)
      .then((store) => {
        cityname = store.city;
        getCityByName(cityname)
          .then((city) => {
            console.log(city.name);
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });
// end nested promise hell

////////////////////////////////


// seloution nested promise hell
// is promise chaining
getProductByName2("Tea Ahmad")
    // resolve
    .then((product) => {
       return getStoreById(product.store_id)
    })
    // 
    .then((store) => {
         return getCityByName(store.city)
    })
    .then((city) => {
        console.log(city.name);
    })
    .catch((err) => {
        console.log(err.message);
    });
