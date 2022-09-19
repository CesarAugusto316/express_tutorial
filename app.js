const express = require('express');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 5_000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

/**
 * 
 * @description Addition
 */
app.post('/api/v1/sum', (req, res, next) => {
  try {
    const { x, y } = req.body;

    res.status(200).json({
      status: 'success',
      message: 'Addition between two numbers',
      result: x + y
    });
  } catch (error) {
    next(error);
  }
});

/**
 * 
 * @description Substraction
 */
app.post('/api/v1/subs', (req, res, next) => {
  try {
    const { x, y } = req.body;

    res.status(200).json({
      status: 'success',
      message: 'Substraction between two numbers',
      result: x - y
    });
  } catch (error) {
    next(error);
  }
});

/**
 * 
 * @description Multiplication
 */
app.post('/api/v1/mult', (req, res, next) => {
  try {
    const { x, y } = req.body;

    res.status(200).json({
      status: 'success',
      message: 'Multiplication between two numbers',
      result: x * y
    });
  } catch (error) {
    next(error);
  }
});

/**
 * 
 * @description Division
 */
app.post('/api/v1/div', (req, res, next) => {
  try {
    const { x, y } = req.body;

    res.status(200).json({
      status: 'success',
      message: 'Division between two numbers',
      result: x / y
    });
  } catch (error) {
    next(error);
  }
});

/**
 * 
 * @description default errorHandler
 */
app.use((err, req, res, next) => {
  if (err) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    return res.status(status).json({
      status,
      message
    });
  } else {
    next();
  }
});

// skip when testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[Server ⚡] running on port ${PORT}.`);
  });
}

module.exports = { app };
