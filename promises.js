const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncawait.txt";
const filePath = path.join(__dirname, fileName);

// write file using async/await
const writefile = async () => {
  try {
    await fs.writeFile(filePath, "this is fs promises async await file", "utf-8");
    console.log("File created successfully");
  } catch (error) {
    console.error(error);
  }
};

writefile();

const readfile = async()=>{
    try{
        const data = await fs.readFile(filePath,"utf-8")
        console.log(data);

    }catch(error){
        console.error(error)
    }
}
readfile()

const appendfile = async()=>{
    try{
        await fs.appendFile(filePath,"\n heelo ", "utf-8")
        console.log("file upadted sucessfully")
    }catch(error){
        console.error(error);
    }
}
appendfile();