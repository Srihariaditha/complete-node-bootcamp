const fs = require('fs');  
const http = require('http');
const url = require('url');

const replaceTemplate =  require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);

///////////////////
//SERVER //
const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)
    console.log(pathname)

    //overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el));
        output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
        res.end(output);

    //product
    } else if (pathname === '/product') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // const product = dataObj.find(el => el.id === query.id);
        const product = dataObj[query.id]
        const output = replaceTemplate(tempProduct, product);
        res.end(output);
    
    //API
    }else if (pathname === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(data);

    //Page not found
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world'
        })
    }
    res.end('<h1>Page Not Found</h1>');
})
server.listen(8000, 'localhost', () => {
    console.log('Server is running on port 8000');
});