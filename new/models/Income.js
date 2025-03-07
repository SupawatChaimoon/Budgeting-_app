

module.exports = (sequelize, DataTypes) => {
    const Income = sequelize.define("Income",{
        Category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        Pocket: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    });
    return Income;
};