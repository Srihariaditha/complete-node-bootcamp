const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middleware- order of your middleware is important here
//Logger middleware
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  next(); // without this function call req-res cycle will be stuck
});

app.use((req, res, next) => {
  //   console.log('Hello from Middleware');
  req.requestTime = new Date().getTime();
  next(); // without this function call req-res cycle will be stuck
});

// app.get('/', (req, res) => {
//     // res.status(200).send('Hello World!');
//     res.status(200).json({message: 'Hello World!', app: "Natours"});

// });

// app.post('/', (req, res) => {
//       res
//         .status(200)
//         .send('Post Hello World!');
// });
// const tours = fs.readFileSync(path.join(__dirname, 'dev-data','data', 'tours-simple.json'), 'utf8');

//ROUTE HANDLERS

//ROUTES

// app.get('/api/v1/tours/:id', getTour)

// app.patch('/api/v1/tours/:id', (req, res) => {
//     res.status(200).json({data: "Updated"});
// })

// app.delete('/api/v1/tours/:id', (req, res) => {
//     res.status(204).json({data: null});
// })

//Mounting routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
