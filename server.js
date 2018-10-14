/**
 * Created by aarnavjindal on 14/10/18.
 */
const express = require('express');
const path = require('path');

const app = express();

app.use('/',express.static(path.join(__dirname,'public_static')));

process.env.PORT = process.env.PORT || 1234;

app.listen(process.env.PORT,function () {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});