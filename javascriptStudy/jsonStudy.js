
// Object to JSON
// stringify
const rabbit = {
    name : 'rabbit',
    color : 'white',
    size : null,
    birthDate : new Date()
}

let json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value: ${value}`)
    return value;
});
console.log(json);

// JSON to Object
// parse
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => console.log(`key : ${key}, value: ${value}`));
console.log(obj);