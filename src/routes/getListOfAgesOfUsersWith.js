"use strict";
const mockDBCalls = require("../database/index.js");

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  try {
    const data = await mockDBCalls.getListOfAgesOfUsersWith(request.params.id);
    return response.status(200).send(JSON.stringify(data));
  } catch (error) {
    return response.status(0).send(error);
  }
};

module.exports = (app) => {
  app.get("/users/age/:id", getListOfAgesOfUsersWithHandler);
};
