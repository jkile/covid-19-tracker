module.exports = function (sequelize, DataTypes) {
    var selfReporting = sequelize.define("selfReporting", {
        dateOf: {
            type: DataTypes.DATE
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        achespains: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        runnynose: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sorethroat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fever: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        difficultyBreathing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        othersymptoms: {
            type: DataTypes.STRING,
        }
    });
    return selfReporting;
}