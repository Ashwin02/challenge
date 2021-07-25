"use strict";
const mockDBCalls = require("../database/index.js");

/** This route returns all the possible options for users to select from */
const getAllOptionsHandler = async (request, response) => {
  try {
    const data = await mockDBCalls.getAllOptions();
    return response.status(200).send(JSON.stringify(data));
  } catch (error) {
    return response.status(0).send(error);
  }
};

module.exports = (app) => {
  app.get("/allOptions", getAllOptionsHandler);
};
