require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config')
const validateToken = require('./validateToken');
const errorHandler = require('./errorHandler');
const bookmarkRouter = require('./bookmarks/bookmarkRouter');

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV ==='test'
}))

app.use(cors());
app.use(helmet());
app.use(validateToken)

app.use(bookmarkRouter);

app.get('/', (req, res) => {
    res.send('Bookmarks server is up and running!')
})

app.use(errorHandler)

module.exports = app