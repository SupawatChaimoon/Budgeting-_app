const { DataTypes } = require("sequelize");
const Sequelize = require('/App/config/db');

const users = Sequelize.define("users", {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: {type: DataTypes.STRING, },
    Password: {type: DataTypes.STRING},
    Pin: {type: DataTypes.INTEGER}
});

module.exports = users;