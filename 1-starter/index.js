const fs = require('fs');

//read from file -blocking by io
const text = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(text);

const textOut = `this is information about avocado🎈:\n ${text}\n created at ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut); //write to find in location the textOut var
console.log('ended');

//read file not blocking by io (input output)
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    if (err) return console.log('ERROR')
    console.log(data)
});
console.log('this will show first because up is async function')
