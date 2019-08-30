'use strict';

// Where is our schema defined????

//Hanna - the schema is defined in the products-schema file

// How do we get it in here so we can run methods on it???

//Hanna we can get it by requiring it to import it

const productsModel = require('./products-schema.js');

class Products {

  constructor() {
  }

  get(_id) {
    // Hanna - Call the appropriate mongoose method to get if the id is valid
    if(_id) {
      return productsModel.findOne({_id,});
    }
    return Promise.reject(new Error('--Invalid ID ---'));

  }

  create(record) {
    // Hanna - Call the appropriate mongoose method to create a new record and save it
    const newRecord = new ProductsModel(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Hanna - Call the appropriate mongoose method to update a record
    return productsModel.findByIdAndUpdate(_id, record, {new: true,});
  }

  delete(_id) {
    // Hanna - Call the appropriate mongoose method to delete a record
    return productsModel.findByIdAndDelete(_id);

  }

}

module.exports = Products;