const express = require('express');
const {join} = require('path');

const PORT = process.env.PORT ?? 4000;
const app = express();
const router = express.Router();

app.use(express.static(join(__dirname, 'build')));

app.listen(PORT, () => console.log(`static server is starting. Port is ${PORT}`));

