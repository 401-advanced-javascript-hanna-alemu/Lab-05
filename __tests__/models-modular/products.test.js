'use strict';

//Hanna - supergoose is used to mock the database
const supergoose = require('../../__tests__/supergoose');

const categories = require('../../models-modular/categories/categories');

describe('Categories Model (Modular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {

    const testCategories = {
      name: 'Hanna',
      description: 'student',
    };

    return categories.create(testCategories)
      .then(savedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(savedCategories[key]).toEqual(testCategories[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'movies',
      description: 'List of movies',
    };

    return categories.create(testCategories)
      .then(savedCategories => {
        return categories.get(savedCategories._id);
      })
      .then(resolvedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(resolvedCategories[key]).toEqual(testCategories[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() all categories', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'movies',
      description: 'List of movies',
    };

    return categories.create(testCategories)
      .then(savedCategories => {
        return categories.get(savedCategories._id);
      })
      .then(resolvedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(resolvedCategories[key]).toEqual(testCategories[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can update() a category', () => {
    let categories = new Categories();
    let testcategories = {
      name:'movies',
      description: 'List of movies',
    };
    let updateCategories = {
      name:'Films',
      description:'List of films',
    };
    return categories.create(testcategories)
      .then( record => {
        let firstRecord = categories.database.filter( object => {
          return object._id === record._id;
        });
        expect(firstRecord[0].name).toEqual('movies');
        return categories.update(record._id, updateCategories);
      })
      .then(record => {
        let newRecord = categories.database.filter( object => {
          return object._id === record._id;
        });
        expect(newRecord[0].name).toEqual('Films');
      });
  });

  it('can delete() a category', () => {
    let categories = new Categories();
    let obj = {
      name: 'Movies',
      description: 'List of movies',
    };
    return categories.create(obj)
      .then(() => {
        return categories.delete( obj._id);
      })
      .then(_id => {
        categories.database.forEach( record => {
          expect(record._id === obj._id).toEqual(false);
        });
      });

  });

});