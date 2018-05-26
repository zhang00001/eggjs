import {
  Sequelize,
  STRING,
  INTEGER,
  //   DATE,
  //   TINYINT,
  Instance,
  BOOLEAN,
  TEXT
} from "sequelize";
// import { any } from 'bluebird';

interface ICase {
  id?: number;
  name: string;
  content: Text;
  group_id: number;
  images: string;
  url: string;
}
type ICaseInstance = Instance<ICase> & ICase;
// app/model/user.js

export let Cases = (database: Sequelize) => {
  const Cases = database.define<ICaseInstance, ICase>("Cases", {
    name: STRING,
    content: TEXT,
    group_id: INTEGER,
    images: STRING,
    url: STRING
  });

  return Cases;
};
