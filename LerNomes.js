const fs = require('fs');
console.log(1);

// const callback = (err, contents) => {
//     console.log(err , String(contents))
// }
// fs.readFile('./nomes.txt', callback);


// //outra forma de chamar a funcao
// fs.readFile('./nomes.txt', (err, contents) => console.log(err, String(contents)));



///mesma coisa usando promise
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    });
});

readFile('./nomes.txt').then(contents => {
    console.log(String(contents));
}).catch(err => {
    console.error('Ocorreu um erro ao ler o arquivo:', err);
});

console.log(2);
console.log(3);
console.log(4);