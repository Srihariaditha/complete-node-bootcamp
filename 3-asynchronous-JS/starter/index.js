const fs = require('fs');
const superagent = require('superagent');

// //callback nested will make life hell
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     if (err) throw err;
//     console.log("Breed: ",data.toString());   
//     superagent
//     .get('https://dog.ceo/api/breeds/images/random')
//     .end((err, res) => {
//         if (err) throw err;
//         console.log(res.body.message);
//         fs.writeFile('dog-img.txt', res.body.message, err => {            
//             if (err) throw err;
//             console.log('The file has been saved!')
//         });

//     });
// });

// //CB hell to promise

// //promise - hey api please get data from API in background and get data and get that value into my data
// //state of promise - pending state
// //at then - promise is resolved

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     if (err) throw err;
//     console.log("Breed: ",data.toString());   
//     superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res =>{
//         fs.writeFile('dog-img.txt', res.body.message, err => {            
//             if (err) throw err;
//             console.log('The file has been saved!')
//         });
//     }).catch(err => {
//         console.log("catch: ", err.message);
//     })
// });

// //BUild a Promise

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("Couldn't read file");
            resolve(data);
        });
    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write file');
            resolve('Success');
        });
    });
}

// readFilePro(`${__dirname}/dog.txt`)
//     .then( data => {
//         console.log("Breed: ",data.toString());   
//         return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//     })
//     .then(res =>{
//         console.log(res.body.message);
//         return writeFilePro('dog-img.txt', res.body.message);
//     })
//     .then(() =>{
//         console.log("File written successfully");
//     })
//     .catch(err => {
//         console.log("catch: ", err);
//     });

//Async Await
const getDogPic = async() => {
    try {
        //syntactic sugar for promises
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log("Breed: ",data.toString());

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await  writeFilePro('dog-img.txt', res.body.message);
        console.log("File written successfully");
    } catch (err) {
        console.log("catch: ", err);
        throw err;
    } 
    return "2: READY"   
}
console.log("1: get");
// getDogPic().then(x => console.log(x)).catch(err => console.log(err));
// const x = getDogPic();
// console.log(x)

(async () => {
    try {
        const x = await getDogPic();
        console.log(x);
    }catch(err) {
        console.log(err);
        throw err;
    }
})();
console.log("3: get") ;


//Run all promises at once
const getDogPicAll = async() => {
    try {
        //syntactic sugar for promises
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log("Breed: ",data.toString());

        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map(el => el.body.message);

        console.log(imgs);

        await  writeFilePro('dog-img.txt', imgs.join('\n'));
        console.log("File written successfully");
    } catch (err) {
        console.log("catch: ", err);
        throw err;
    } 
    return "2: READY"   
}

getDogPicAll();