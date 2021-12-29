const { Schema, model } = require("mongoose");

const schema = Schema({
  guild: String,
  taglar: Array
});

module.exports = model("yasaklitag", schema);
