const app = require('./app');

//SERVER
const port = 8000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});