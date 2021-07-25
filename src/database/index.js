"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    const users = getAllUsersByOption(item);
    const result = _.chain(users)
      .groupBy("age")
      .map((group) => ({ age: group[0].age, count: group.length }))
      .value();
    return result;
  };
  return mockDBCall(dataAccessMethod);
};

const getAllOptions = () => {
  const dataAccessMethod = () => _.uniqBy(_.flatMap(db.itemsOfUserByUsername));
  return mockDBCall(dataAccessMethod);
};

const getAllUsersByOption = (option) => {
  const result = [];
  const listOfUsers = _.map(db.usersById, (userInfo) => userInfo);
  for (let [key, value] of Object.entries(db.itemsOfUserByUsername)) {
    if (value.includes(option)) {
      const userList = listOfUsers.filter((item) => item.username === key);
      result.push(...userList);
    }
  }
  return result;
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getAllOptions,
};
