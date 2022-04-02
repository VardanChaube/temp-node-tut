const { readFileSync, writeFileSync}=require('fs');


const First=readFileSync('./content/first.txt','utf-8');
const Second=readFileSync('./content/second.txt','utf-8');

console.log(First, Second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${First}, ${Second}`,{flag: 'a'});
