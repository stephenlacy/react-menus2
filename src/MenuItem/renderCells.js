"use strict";
var renderCell = require("./renderCell");
module.exports = function(a) {
  return a.columns.map(renderCell.bind(null, a));
};

