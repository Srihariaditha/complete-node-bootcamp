const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
console.log(process.env);

const app = require('./app');

//SERVER
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});