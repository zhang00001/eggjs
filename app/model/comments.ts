import {
  Sequelize,
  STRING,
  INTEGER,
  DATE,
  //   TINYINT,
  Instance
  // BOOLEAN
} from "sequelize";
// import { any } from 'bluebird';

interface Icomments {
  id: number;
  user_nick_name: string;
  contant: string;
  created_at: Date;
  updated_at: Date;
  parent_id: number;
  ariticle_id: number;
}
type ICommentsInstance = Instance<Icomments> & Icomments;
// app/model/user.js

export let Comments = (database: Sequelize) => {
  const Comments = database.define<ICommentsInstance, Icomments>("comments", {
    id: { type: INTEGER, primaryKey: true },
    user_nick_name: STRING,
    contant: STRING,
    created_at: DATE,
    updated_at: DATE,
    parent_id: INTEGER,
    ariticle_id: INTEGER
  });

  return Comments;
};
