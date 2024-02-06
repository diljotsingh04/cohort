const fs = require('fs');

function read_file(fileName){
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function writeFile(fileName) {
    const data = await read_file(fileName);
    console.log(data);
}

writeFile('another.txt');