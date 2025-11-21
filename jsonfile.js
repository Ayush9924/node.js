// const fs = require('fs');

// fs.readFile('filemodule.json','utf8',(err,data)=>{
//     if(err)
//     {
//         console.error(err);
//         return;
//     }
//     const parsedData = JSON.parse(data);
//     console.log(parsedData);
// })


const fs = require('fs');
const data1 = {
    name:'aman',
    age:24,
    dept:"ece"
};
const jsonString3 = JSON.stringify(data1);

fs.writeFile('data.json',jsonString3,'utf8',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Data written to file');
    
})

fs.appendFile('data.json',jsonString3,'utf8',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Data added to file');
});