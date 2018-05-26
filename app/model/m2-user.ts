import {
  Sequelize,
  STRING,
  //   INTEGER,
  //   DATE,
  //   TINYINT,
  Instance
  //   BOOLEAN
} from "sequelize";
// import { any } from 'bluebird';

interface IM2User {
  id?: number;
  phone?: string;
  username?: string;
  password?: string;
  // created_at?: Date;
  // updated_at?: Date;
  user_type?: string;
  shop_id?: number;
  nickname?: string;
  // role_id?: number;
}
type IM2UserInstance = Instance<IM2User> & IM2User;
// app/model/user.js

export let M2User = (database: Sequelize) => {
  const User = database.define<IM2UserInstance, IM2User>(
    "user",
    {
      phone: STRING,
      username: STRING,
      password: STRING,
      nickname: STRING,
      // role_id: INTEGER,
      user_type: STRING
    },
    {
      freezeTableName: true
    }
  );

  return User;
};
