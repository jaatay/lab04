'use strict'

const fs = require('fs');


//method to convert file to buffer
const bufferConvert = file => {
    return Buffer.from(file);
}

//method to convert buffer to JSON in order to extract data into an array from string
const convertToJson = buffer => {
    let newConvert = buffer.toJSON(buffer);
    return newConvert;
}

//FILE CHANGE DATA
//article tag begin
const articleTagBegin = [60, 97, 114, 116, 105, 99, 108, 101, 62];
const articleTagEnd = [60, 47, 97, 114, 116, 105, 99, 108, 101, 62];

//method to read file
const readThis = file => {
    fs.readFile(file, function(err, data){
        if(err){
            throw err;
        }

        console.log(data);
       // let newBuffer = bufferConvert(data);
        let newJSON = convertToJson(data);

        let tempJSON = articleTagBegin.concat(newJSON.data).concat(articleTagEnd);

        newJSON.data = tempJSON;

        let fixedBuffer = bufferConvert(newJSON.data);

        console.log(newJSON);
        console.log(newJSON.data);
        console.log(fixedBuffer.toString());
    });
}

readThis('./files/pair-programming.txt');
