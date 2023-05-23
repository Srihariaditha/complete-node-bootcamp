const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
// console.log(process.env);

const app = require('./app');

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connected'));

//SERVER
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
