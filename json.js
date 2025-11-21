const data = {
    name: "abc",
    age: "23",
    depth: "cse",
}
console.group(data)
console.log(data.name)

// 1st method -- convert object into jason using stringify
const objdata = JSON.stringify(data)
console.log(objdata)
// console.log(objdata.name)

// 2nd method --- convert json into object
const jsondata = JSON.parse(objdata)
console.log(jsondata)