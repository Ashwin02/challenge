'use strict';
const mockDBCalls = require('../database/index.js');

const getAllOptionsHandler = async (request, response) => {
    const data = await mockDBCalls.getAllOptions();
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/allOptions', getAllOptionsHandler);
};
