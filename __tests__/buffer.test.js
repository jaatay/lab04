'use strict'

const bufferModule = require('../files/loop');

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