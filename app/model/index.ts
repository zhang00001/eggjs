import Sequlize = require("sequelize");

export let zhangxiangsheng = new Sequlize(
  "zhangxiangsheng",
  "misheng",
  "misheng",
  {
    host: "47.100.23.203",
    dialect: "mysql",
    pool: {
      max: 5
    },
    define: {
      underscored: true
    }
  }
);
export let m2centraldb = new Sequlize("m2centraldb", "misheng", "misheng", {
  host: "47.100.23.203",
  dialect: "mysql",
  pool: {
    max: 5
  }
});

// customer

import { User } from "./user";
import { Role } from "./role";
import { Module } from "./module";
import { Articles, VerifyStatus } from "./articles";
import { OSSFile } from "./oss-file";
import { M2User } from "./m2-user";
import { Categroy } from "./article_categroy";
import { Comments } from "./comments";
import { Cases } from "./case";
// customer model

export let userModel = User(zhangxiangsheng);
export let roleModel = Role(zhangxiangsheng);
export let moduleModel = Module(zhangxiangsheng);
export let articlesModel = Articles(zhangxiangsheng);
export let ossFileModel = OSSFile(zhangxiangsheng);
export let m2UserModel = M2User(m2centraldb);
export let CategroyModel = Categroy(zhangxiangsheng);
export let CommentsModel = Comments(zhangxiangsheng);
export let CaseModel = Cases(zhangxiangsheng);
export { VerifyStatus };
// m2 model
