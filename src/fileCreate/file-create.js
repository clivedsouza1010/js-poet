const fs = require('file-system');

export function createJS(fileName, methodSpec) {
    fs.writeFile(fileName, methodSpec, (err) => {
        if (err) throw err;
        console.log('The file has been created!');
    });
}

