const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 5


setTimeout(() =>console.log("Timer 1 finished"), 0)
setImmediate(() => console.log("Immediate finished"));

fs.readFile('test-file.txt', () => {
    console.log("I/O  read");

    console.log("----------------");

    crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512')    
    console.log(Date.now()-start, "crypto");
    crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512')

    console.log(Date.now()-start, "crypto");
    crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512')

    console.log(Date.now()-start, "crypto");
    setTimeout(() =>console.log("Timer 2 finished"), 0)
    setTimeout(() =>console.log("Timer 3 finished"), 3000)
    setImmediate(() => console.log("Immediate 2 finished")); //event loop executes setImmediate fter the 4 phoase loops phase 

    process.nextTick(() => console.log("Process nexttick")); // event loop excutes this first it checks for this after each phase
    //nexttick happens before nextloop phase

    

    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, "crypto");
    });
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, "crypto");
    });
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, "crypto");
    });
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, "crypto");
    });
});
console.log("Hello from top level  code")
