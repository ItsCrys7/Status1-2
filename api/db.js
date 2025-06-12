import express from 'express';
const app = express();

app.use(express.text()); // pentru text/plain
app.use(express.json()); // pentru application/json
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

// export const Task = sequelize.define(
//   "Task",
//   {
//     id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     listId: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
    
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     color: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     deletedAt: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       validate: {
//         notEmpty: true,
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     paranoid: true,             // pt deleted
//     timestamps: true,           // pt updated & created
//   }
// )

export const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Nu e nevoie să definești createdAt/updatedAt/deletedAt manual
    // Sequelize le adaugă automat dacă `timestamps: true` și `paranoid: true`
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
  }
);

export const List = sequelize.define(
  "List",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
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

export const Events = sequelize.define(
  "Events",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,             
    timestamps: true,         
  }
)

export const Projects = sequelize.define(
  "Projects",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,             
    timestamps: true,         
  }
)

export const Accounts = sequelize.define(
  "Accounts",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true,
      },
    },
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
    paranoid: true,             
    timestamps: true,         
  }
)

export const AboutYou = sequelize.define(
  "About You",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,             
    timestamps: true,         
  }
)

List.hasMany(Task)
Task.belongsTo(List)