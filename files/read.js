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

//method to convert each sentence into a list item
const convertToListItem = bufferArray => {
    for(let i = 0; i < bufferArray.length; i++){
        if(bufferArray[i] === 46){

            bufferArray[i] = 178;
           //bufferArray.splice(bufferArray[i], 0, 60, 108, 105, 62);
            //bufferArray.splice(bufferArray[i], 0, 105);
           // bufferArray.splice(bufferArray[i], 0, 108);
            //bufferArray.splice(bufferArray[i], 0, 60);
        }
    }
}

//FILE CHANGE DATA
//article tags
const articleTagBegin = [60, 97, 114, 116, 105, 99, 108, 101, 62];
const articleTagEnd = [60, 47, 97, 114, 116, 105, 99, 108, 101, 62];

//list tags
const listTag = [60, 108, 105, 62];

//method to read file
const readThis = file => {
    fs.readFile(file, function(err, data){
        if(err){
            throw err;
        }

        console.log(data);

        let newJSON = convertToJson(data);

        let tempJSON = articleTagBegin.concat(newJSON.data).concat(articleTagEnd);

        convertToListItem(tempJSON);

        newJSON.data = tempJSON;

        let fixedBuffer = bufferConvert(newJSON.data);

        console.log(newJSON);
        console.log(newJSON.data);
        console.log(fixedBuffer.toString());
    });
}

readThis('./files/pair-programming.txt');
