const path = require('path');// to connect with inbox.js file not use require('.\contracts...') bcs file is in sol format
const fs = require('fs');// file use for read file

const solc = require('solc'); // make compiler for compile code solidity


const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol'); // takes three param resolve
const source = fs.readFileSync(inboxPath,'utf8');//UTF-8 is a compromise character encoding that can be as compact as ASCII

module.exports = solc.compile(source,1).contracts[':Inbox'];
