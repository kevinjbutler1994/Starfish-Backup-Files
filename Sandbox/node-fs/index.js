
import fs from "fs";


fs.writeFile("./file.txt", "hello world", 
  error=> {
    if (error) console.error(error) 
    else console.log("Success!") 
  }
);
