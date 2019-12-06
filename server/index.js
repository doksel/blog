// const app = require('./app');
import app from './app';
import {port} from './config';

const PORT = port || 8000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
