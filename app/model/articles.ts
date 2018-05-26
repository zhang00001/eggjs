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
export enum VerifyStatus {
  weitVerify = 0, //待审核
  okVerify, //审核通过
  failVerify //审核失败
}

interface IArticles {
  id?: number;
  title: string;
  content: Text;
  autor_id: number;
  verify_id: number;
  click_num: number;
  article_categroy_name: string; //分组名称
  article_categroy_id: number; //组id
  autor_name: string; //作者
  verify_name: string; //审核
  created_at?: Date;
  updated_at?: Date;
  verify_status?: VerifyStatus; //审核状态
  images: string | string[];
  is_recommand: boolean; //是否推荐
  content_md: Text;
}
type IArticlesInstance = Instance<IArticles> & IArticles;
// app/model/user.js

export let Articles = (database: Sequelize) => {
  const Articles = database.define<IArticlesInstance, IArticles>("articles", {
    title: STRING,
    content: TEXT,
    autor_id: INTEGER,
    autor_name: STRING,
    verify_id: INTEGER,
    verify_name: STRING,
    click_num: STRING,
    article_categroy_name: STRING,
    article_categroy_id: INTEGER,
    verify_status: INTEGER,
    images: STRING,
    is_recommand: BOOLEAN,
    content_md: TEXT
  });

  return Articles;
};
