"use strict";

const Sequelize = require("sequelize");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname + "/../config/config.json")); // [env]

const User_Info = require("./join.js"); // module.exports 를 해줘야함
const BookInfo = require("./bookInfo.js");
const ReviewInfo = require("./review.js");

// const Login = require("./login.js"); // 파일 만들기

const db = { User_Info, BookInfo, ReviewInfo };
// const db = {User_Info, Login};

let sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
    port: config.database.port
  }
);

User_Info.init(sequelize);
BookInfo.init(sequelize);
// Login.init(sequelize);
ReviewInfo.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
