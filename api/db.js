import { Sequelize, DataTypes } from "sequelize"

const db = {
  NAME: "status2",
  USERNAME: "status2",
  PASSWORD: "status2",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.status2",
    port: 3306,
    logging: function (str) {
      console.log(str)
    }
  }
}

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options);

export const List = sequelize.define(
  "List",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,             // pt deleted
    timestamps: true,           // pt updated & created
  }
)

export const Task = sequelize.define(
  "Task",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,             // pt deleted
    timestamps: true,           // pt updated & created
  }
)

List.hasMany(Task)
Task.belongsTo(List)