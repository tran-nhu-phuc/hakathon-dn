import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
const NoteApp = sequelize.define(
  "note_app",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
export default NoteApp;
