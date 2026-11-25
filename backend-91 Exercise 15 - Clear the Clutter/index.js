// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. rishabh.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. rishabh.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/rishabh.pdf
// zip/rishabh.zip zip/Rohan.zip


const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "clutter");

// Read all items inside the directory
const files = fs.readdirSync(directoryPath);

for (const file of files) {
    const filePath = path.join(directoryPath, file);

    // Check whether it is a file
    if (fs.statSync(filePath).isFile()) {

        // Get file extension
        const extension = path.extname(file).slice(1);

        // Skip files without an extension
        if (!extension) {
            continue;
        }

        // Create folder path
        const folderPath = path.join(directoryPath, extension);

        // Create folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Move file into the extension folder
        const destinationPath = path.join(folderPath, file);

        fs.renameSync(filePath, destinationPath);

        console.log(`${file} moved to ${extension}/`);
    }
}