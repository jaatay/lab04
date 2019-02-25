# lab04
![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

### Author: Jesse Atay

[![Build Status](https://travis-ci.org/jaatay/lab02.svg?branch=master)](https://travis-ci.org/jaatay/lab02)

### Links and Resources
* [repo](https://github.com/jaatay/lab02)


### Modules
#### `loop.js`
##### customToString(buffer) -> string

#### `read.js`
##### readThis() -> string
##### convertToJson(buffer) -> JSON object


### Setup
#### `.env` requirements
* `PORT` - Local default port

#### Running the app
* `npm start` to start
* `npm run test` to run jest tests

#### Tests
* Tests conducted via node using Jest test package. Branch rule testing build via Travis, linked to repo. All branches required passing build prior to merge into Master branch.

* Assertions

describe('#loop.js', () => {
    let testBuffer = bufferModule.testBuffer;
    let testNameBuffer = bufferModule.nameBuffer;

    test('testing the test', () => {
        expect(typeof 'testBuffer').toBe('string');
    });

    test('name buffer exists', () => {
        expect(testNameBuffer).toBeTruthy();
    });

    test('all characters exist', () => {
        expect(testNameBuffer.length).toBe(16);
    });

    test('output matches console', () => {
        expect(testNameBuffer.toString()).toBe('Jesse,Bob,Cletus');
    });

})

#### Acknoledgements
vladimirsan - outline and starter code