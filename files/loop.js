'use strict'

const testBuffer = Buffer.from('test');

//name array buffer - repl tested, repl approved
const nameBuffer = new Buffer ([74, 101, 115, 115, 101, 44, 66, 111, 98, 44, 67, 108, 101, 116, 117, 115]);


//buffer string test print method from demo code
//because of file structure, in order to run use 'node ./files/loop.js' in CLI
const customToString = buffer => {
    let output = '';
    for(let i = 0; i < buffer.length; i++) {
      output += String.fromCharCode(buffer[i]);
    }
    return output;
  };

console.log(customToString(nameBuffer));

module.exports = {testBuffer, nameBuffer};