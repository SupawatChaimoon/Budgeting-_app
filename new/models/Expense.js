

module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define("Expense",{
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
    return Expense;
};