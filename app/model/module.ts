import {
  Sequelize,
  STRING,
  //   INTEGER,
  //   DATE,
  //   TINYINT,
  Instance
  //   BOOLEAN
} from "sequelize";
// import { start } from "repl";
// import { any } from 'bluebird';

interface Imodule {
  id?: number;
  name?: string; //选择的模块分类，用户下拉选择
  parent_id?: number;
  user_module_name?: string; //栏目名称 用户自定义；
  key_word?: string;
  link?: string;
  sort?: number; //排序
  icon_font: string;
  can_delete: boolean;
}
type Imodulenstance = Instance<Imodule> & Imodule;
// app/model/user.js

export let Module = (database: Sequelize) => {
  const module = database.define<Imodulenstance, Imodule>("module", {
    name: STRING,
    parent_id: STRING,
    user_module_name: STRING,
    key_word: STRING,
    link: STRING,
    sort: STRING,
    icon_font: STRING,
    can_delete: STRING
  });

  return module;
};
