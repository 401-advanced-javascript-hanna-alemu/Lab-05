'use strict';

//Hanna - supergoose is used to mock the database
const supergoose = require('../supergoose.js');

const Products = require('../../models-singular/products.js');

let products = new Products();



describe('products Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', () => {

    const testproducts = {
      name: 'Hanna',
      description: 'student',
    };

    return products.create(testproducts)
      .then(savedproducts => {
        Object.keys(testproducts).forEach(key => {
          expect(savedproducts[key]).toEqual(testproducts[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a product', () => {
    const products = new Products();
    const testproducts = {
      name: 'movies',
      description: 'List of movies',
    };

    return products.create(testproducts)
      .then(savedproducts => {
        return products.get(savedproducts._id);
      })
      .then(resolvedproducts => {
        Object.keys(testproducts).forEach(key => {
          expect(resolvedproducts[key]).toEqual(testproducts[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() all products', () => {
    const products = new Products();
    const testproducts = {
      name: 'movies',
      description: 'List of movies',
    };

    return products.create(testproducts)
      .then(savedproducts => {
        return products.get(savedproducts._id);
      })
      .then(resolvedproducts => {
        Object.keys(testproducts).forEach(key => {
          expect(resolvedproducts[key]).toEqual(testproducts[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can update() a product', () => {
    let products = new Products();
    let testproducts = {
      name:'movies',
      description: 'List of movies',
    };
    let updateproducts = {
      name:'Films',
      description:'List of films',
    };
    return products.create(testproducts)
      .then( record => {
        let firstRecord = products.database.filter( object => {
          return object._id === record._id;
        });
        expect(firstRecord[0].name).toEqual('movies');
        return products.update(record._id, updateproducts);
      })
      .then(record => {
        let newRecord = products.database.filter( object => {
          return object._id === record._id;
        });
        expect(newRecord[0].name).toEqual('Films');
      });
  });

  it('can delete() a product', () => {
    let products = new Products();
    let obj = {
      name: 'Movies',
      description: 'List of movies',
    };
    return products.create(obj)
      .then(() => {
        return products.delete( obj._id);
      })
      .then(_id => {
        products.database.forEach( record => {
          expect(record._id === obj._id).toEqual(false);
        });
      });

  });

});