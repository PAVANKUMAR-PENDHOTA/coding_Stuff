const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
mongoose.set("strictQuery", false);
db.mongoose = mongoose;
db.url = dbConfig.url;
db.contacts = require("./contact.model.js")(mongoose);

module.exports = db;
