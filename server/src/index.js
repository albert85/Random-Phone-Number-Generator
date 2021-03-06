import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import dotenv from 'dotenv';

import route from './route';

const app = express();

dotenv.config();

//  Log request to console
app.use(logger('dev'));

// Swagger path
const swaggerPath = path.join(__dirname, './apiDocs/*.js');

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: {
    info: {
      title: 'Random Number Generator',
      version: '1.0.0',
      description: 'API Documentation of Random Number',
    },
    host: 'localhost:4000',
    basePath: '/',
  },
  // path to the API docs
  apis: [swaggerPath],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

// serve swagger
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

// import routes into application
app.use('/api/v1', route);

app.use(express.static(path.join(__dirname, '../../client/public/')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/public/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/public/index.html'));
});

const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is runing on port ', port);
});

export default app;
