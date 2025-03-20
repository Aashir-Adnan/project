const express = require('express');
const { middlewareHandler } = require('./middlewares/middlewares.js');

module.exports = () => {
    const router = express.Router();

    router.use('/api', (req, res, next) => middlewareHandler(req, res, next));

    return router;
};
