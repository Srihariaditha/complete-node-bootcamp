//Blocking Synchronous way
// const txtOut = `This is what we know about Avacado: ${txtIn}.\n Created on ${Date.now()}`;
// console.log(txtOut);
// fs.writeFileSync('./txt/output.txt', txtOut);
// console.log(txtOut);
// const hello = 'Hello world!';
// console.log(hello);

//Non Blocking asynchronous way - be aware of callback hell

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) throw err;
//     console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         if (err) throw err;
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//                     if (err) throw err;
//                     console.log(data3);
//                     fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8', (err) => {
                        
//                         if (err) throw err;
//                         console.log('Written'); 

//                     });
//                 });
//     });
// })
// console.log('Read Written')