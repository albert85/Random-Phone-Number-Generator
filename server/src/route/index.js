import express from 'express';

import phoneBook from './phoneBook';

const app = express();

app.use(phoneBook);

export default app;
