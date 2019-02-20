'use strict'

const bufferModule = require('../files/loop');

describe('#loop.js', () => {
    let testBuffer = bufferModule.testBuffer;
    test('testing the test', () => {
        expect(typeof 'testBuffer').toBe('string');
    });

})