require('dotenv').config();
const express = require('express');
const app = express();
const session = require("express-session");
const massive = require("massive");
const bcrypt = require("bcrypt");



app.listen(8080, () => console.log('ready'))