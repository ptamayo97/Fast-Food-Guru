module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account ", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Account;
}