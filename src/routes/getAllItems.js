'use strict';
const mockDBCalls = require('../database/index.js');

const getAllItemsHandler = async (request, response) => {
    const data = await mockDBCalls.getAllItems();
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/allItems', getAllItemsHandler);
};
