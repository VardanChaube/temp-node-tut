// const names = require('./4-names');
// const sayHi = require('./5-util');

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

// const {readFileSync, writeFileSync}=require(`fs`);

// const first =readFileSync(`./content/first.txt`,`utf8`)
// const second = readfileSync(`./content/second.txt`, `utf8`)

// console.log(first,second);
// writeFile(`./content/result-sync.txt`,`Here is the result : ${first},${second}`,{flag: 'a'})

const _= require('lodash');

const items=[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(items);
console.log(newItems);
