import { Controller } from "egg";

import db = require("../model");

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render("index");
  }
  async signup() {
    // let { ctx } = this;
    // let { phone, authcode, username, child_school_name } = ctx.request.body;
    // let verify = await this.service.alidayu.queryUserRegisiterAuthCode(
    //   phone,
    //   authcode
    // );
    // if (verify) {
    // let user = await db.User.findOne({ where: { phone } });
    // if (user) {
    //   await ctx.render("index", { errorMsg: "手机号已经被注册c" });
    // } else {
    //   let newUser = await db.User.create({
    //     phone,
    //     username,
    //     child_school_name
    //   });
    // ctx.body = { ok: true, data: newUser };
    // }
    // } else {
    // await ctx.render("index", { errorMsg: "验证码错误" });
  }
  // ctx.body = {
  //   ok: true,
  //   data: { phone, authcode, username, child_school_name }
  // };
  // }
  async sendSms() {
    let { ctx } = this;
    let { phone } = ctx.request.body;
    let result = await this.service.alidayu.sendUserRegisiterAuthCode(phone);
    ctx.body = { ok: true, data: result };
  }
  async getHeader() {
    await this.ctx.render("page/header");
  }
  async getHome() {
    await this.ctx.render("page/home");
  }
  async getAbout() {
    await this.ctx.render("page/about");
  }
  async getServices() {
    await this.ctx.render("page/services");
  }
  async getNews2() {
    let cases = await db.CaseModel.findAll();
    await this.ctx.render("page/news-2", { cases });
  }
  async getNew() {
    let groups = await db.CategroyModel.findAll();
    let querySql = "";
    let groupId = this.ctx.query.groupId;

    if (this.ctx.query.groupId) {
      querySql = `SELECT articles.id,articles.title,articles.images,articles.comment_num, articles.created_at,articles.click_num,article_categroys.name  ,article_categroy_id FROM articles left join   article_categroys  on article_categroys.id= articles.article_categroy_id  
where article_categroys.id=${groupId}`;
    } else {
      querySql = ` SELECT articles.id,articles.title,articles.images,articles.comment_num, articles.created_at,articles.click_num,article_categroys.name  ,article_categroy_id FROM articles left join   article_categroys  on article_categroys.id= articles.article_categroy_id ;`;
    }

    let articlesArr = await db.zhangxiangsheng.query(querySql);
    let articles = articlesArr[0];

    articles.forEach(article => {
      if (!article.images) article.images = "";

      article.images = article.images
        ? (article.images as string).split(",")
        : [];
    });

    await this.ctx.render("page/news", { groups, articles: articles });
  }
  async getJob() {
    await this.ctx.render("page/job");
  }
  async getContact() {
    await this.ctx.render("page/contact");
  }
  async getOffical() {
    await this.ctx.render("page/offical");
  }
  async getElection() {
    await this.ctx.render("page/election");
  }
  async getIndustryn() {
    await this.ctx.render("page/industry");
  }
  async getApp() {
    await this.ctx.render("page/app");
  }
  async getInteraction() {
    await this.ctx.render("page/interaction");
  }
  async getWechat() {
    await this.ctx.render("/page/we-chat");
  }
  async getArticleDetail() {
    let article = await db.articlesModel.findById(this.ctx.query.articleId);
    let groups = await db.CategroyModel.findAll();
    let articles = await db.articlesModel.findAll();

    let groupId = this.ctx.query.groupId;

    articles.forEach(article => {
      if (!article.images) article.images = "";
      // console.log(article.images, typeof article.images);
      article.images = article.images
        ? (article.images as string).split(",")
        : [];
    });
    if (article) {
      let group = await db.CategroyModel.findById(article.article_categroy_id);
      await this.ctx.render("/page/article-detail", {
        article,
        group,
        groups,
        articles,
        groupId
      });
    }

    return;
  }
  async getCaseDetail() {
    await this.ctx.render("/page/case-detail");
  }
}
