'use strict';
module.exports = function(sequelize, DataTypes) {
  var Command = sequelize.define('Command', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Command;
};