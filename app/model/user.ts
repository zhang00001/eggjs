import {
  Sequelize,
  STRING,
  INTEGER,
  //   DATE,
  //   TINYINT,
  Instance
  //   BOOLEAN
} from "sequelize";
// import { any } from 'bluebird';

interface IUser {
  id?: number;
  phone?: string;
  username?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
  // user_type?: string;

  nickname?: string;
  role_id?: number;
}
type IUserInstance = Instance<IUser> & IUser;
// app/model/user.js

export let User = (database: Sequelize) => {
  const User = database.define<IUserInstance, IUser>(
    "user",
    {
      phone: STRING,
      username: STRING,
      password: STRING,
      nickname: STRING,
      role_id: INTEGER
      // user_type: STRING
    },
    {
      // freezeTableName: true
    }
  );

  return User;
};
