# Lab-05

### Author: Hanna Alemu

### Common npm Scripts
 "lint": "eslint \"**/*.js\"",  
   "start": "node index.js",  
   "test": "jest --verbose --coverage",  
   "test-watch": "jest --watchAll --verbose --coverage",  
   "jsdoc": "jsdoc -c ./docs/config/jsdoc.config.json",  
   "startDB": "mkdir -p ./.db && mongod --dbpath ./.db"

### Modules
#### `modulename.js`
##### Exported Values and Methods


### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - Mongoose URL

#### Running the app
* `npm start`
* Endpoints: 

/categories
/products

#### Tests
npm run test

#### UML
