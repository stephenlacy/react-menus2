"use strict";
var MenuClass = require("./Menu"),
  MenuItem = require("./MenuItem"),
  MenuItemCell = require("./MenuItemCell"),
  MenuSeparator = require("./MenuSeparator");
(MenuClass.Item = MenuItem),
  (MenuClass.Item.Cell = MenuItemCell),
  (MenuClass.ItemCell = MenuItemCell),
  (MenuClass.Separator = MenuSeparator),
  (module.exports = MenuClass);

