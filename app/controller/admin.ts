import { Controller } from "egg";
// import { watchFile } from "fs";
// import { json } from "body-parser";
// import db = require("../model");
export default class HomeController extends Controller {
  async postUserAndModuleList() {
    let { username, password } = this.ctx.request.body;
    let result = await this.service.systemModule.postUserAndModuleList(
      username,
      password
    );
    this.ctx.body = { ok: typeof result != "string", data: result };
  }
  async getModuleAll() {
    let result = await this.service.systemModule.getModuleAll();

    this.ctx.body = {
      ok: true,
      data: result
    };
  }
  async getModulePage() {
    let { page, pageSize } = this.ctx.query;
    let pageModule = await this.service.systemModule.getModulePage(
      page,
      pageSize
    );
    this.ctx.body = { ok: true, data: pageModule };
  }
  async createModule() {
    let newModule = this.ctx.request.body;
    let result = await this.service.systemModule.createModule(newModule);
    this.ctx.body = { ok: true, data: result };
  }
  async deleteModule() {
    let module_ids = this.ctx.request.body.module_ids;
    let result = await this.service.systemModule.deleteModule(module_ids);
    this.ctx.body = { ok: true, data: result };
  }
  async updateModule() {
    let module_id = await this.ctx.query.module_id;
    let module = await this.ctx.request.body;
    let result = await this.service.systemModule.updateModule(
      module_id,
      module
    );
    this.ctx.body = { ok: true, data: result };
  }
  async findModule(keyword) {
    let result = await this.service.systemModule.findModule(keyword);
    this.ctx.body = { ok: true, data: result };
  }
  async getRolePage() {
    let { page, pageSize } = this.ctx.query;
    let pageRole = await this.service.systemModule.getRolePage(page, pageSize);
    this.ctx.body = { ok: true, data: pageRole };
  }
  async createRole() {
    let newRole = this.ctx.request.body;
    newRole.modules_ids = JSON.stringify(newRole.modules_ids);
    let result = await this.service.systemModule.createRole(newRole);
    this.ctx.body = { ok: true, data: result };
  }
  async deleteRole() {
    let role_ids = this.ctx.request.body.role_ids;
    let result = await this.service.systemModule.deleteRole(role_ids);
    this.ctx.body = { ok: true, data: result };
  }
  async updateRole() {
    let role_id = await this.ctx.query.role_id;
    let role = await this.ctx.request.body;
    let result = await this.service.systemModule.updateRole(role_id, role);
    this.ctx.body = { ok: true, data: result };
  }
  async findRole(keyword) {
    let result = await this.service.systemModule.findModule(keyword);
    this.ctx.body = { ok: true, data: result };
  }
  async getUserList() {
    let { page, pageSize } = this.ctx.query;
    let pageUser = await this.service.systemModule.getUserList(page, pageSize);
    this.ctx.body = { ok: true, data: pageUser };
  }
  async createUser() {
    let newUser = this.ctx.request.body;
    let result = await this.service.systemModule.createUser(newUser);
    this.ctx.body = { ok: true, data: result };
  }
  async getRoleAll() {
    let result = this.service.systemModule.getRoleAll();
    this.ctx.body = { ok: true, data: result };
  }
  async deleteUser() {
    let user_ids = this.ctx.request.body.user_ids;
    let result = await this.service.systemModule.deleteUser(user_ids);
    this.ctx.body = { ok: true, data: result };
  }
  async updateUser() {
    let user_id = await this.ctx.query.user_id;
    let user = await this.ctx.request.body;
    let result = await this.service.systemModule.updateUser(user, user_id);
    this.ctx.body = { ok: true, data: result };
  }
  async PostLogin() {
    let user_ids = this.ctx.query.user_id;
    let result = await this.service.systemModule.PostLogin(user_ids);
    this.ctx.body = { ok: true, data: result };
  }
  async GetArticlesPage() {
    let { page, pageSize, option } = this.ctx.query;
    console.log(option, typeof option);
    if (option) {
      if (typeof option == "string") {
        option = JSON.parse(option);
        if (typeof option.startTime == "string")
          option.startTime = new Date(option.startTime);
        if (typeof option.endTime == "string")
          option.endTime = new Date(option.endTime);
      }
    }
    let articleslist = await this.service.systemModule.GetArticlesPage(
      page,
      pageSize,
      option
    );
    this.ctx.body = { ok: true, data: articleslist };
  }
  async createArticles() {
    let newArticles = this.ctx.request.body;
    let result = await this.service.systemModule.createArticles(newArticles);
    this.ctx.body = { ok: true, data: result };
  }
  async deleteArticles() {
    let articles_ids = this.ctx.request.body.articles_ids;
    let result = await this.service.systemModule.deleteArticles(articles_ids);
    this.ctx.body = { ok: true, data: result };
  }
  async updateArticles() {
    let articles_id = this.ctx.query.articles_id;
    let articles = this.ctx.request.body;
    let result = await this.service.systemModule.updateArticles(
      articles,
      articles_id
    );
    this.ctx.body = { ok: true, data: result };
  }
  async createCategroy() {
    let categroys = this.ctx.request.body;
    let result = await this.service.systemModule.createCategroy(categroys);

    this.ctx.body = { ok: true, data: result };
  }
  async deleteCategroy() {
    let categroy_ids = this.ctx.request.body.categroy_ids;
    let result = this.service.systemModule.deleteCategroy(categroy_ids);
    this.ctx.body = { ok: true, data: result };
  }
  async getArticleTypePage() {
    let { page, pageSize } = this.ctx.query;
    let pagecategroylist = await this.service.systemModule.getArticleTypePage(
      page,
      pageSize
    );
    this.ctx.body = { ok: true, data: pagecategroylist };
  }
  async getArticleTypeAll() {
    let result = await this.service.systemModule.getArticleTypeAll();
    this.ctx.body = { ok: true, data: result };
  }
  async updateCategroy() {
    let categroys_id = this.ctx.query.categroys_id;
    let categroys = this.ctx.request.body;
    let result = await this.service.systemModule.updateCategroy(
      categroys,
      categroys_id
    );
    this.ctx.body = { ok: true, data: result };
  }
  async getCommonPage() {
    let result = await this.service.systemModule.getCommonPage();
    this.ctx.body = { ok: true, data: result };
  }
  async createCommon() {
    let commons = this.ctx.request.body.commons;
    let result = await this.service.systemModule.createCommon(commons);
    this.ctx.body = { ok: true, data: result };
  }
  async recommandArticle() {
    let { articles_id, is_recommand } = this.ctx.request.body;

    let result = await this.service.systemModule.recommandArticle(
      is_recommand,
      articles_id
    );
    this.ctx.body = { ok: true, data: result };
  }
  async passArticle() {
    let articles_id = this.ctx.request.body.articles_id;
    let result = await this.service.systemModule.passArticle(articles_id);
    this.ctx.body = { ok: true, data: result };
  }
  async refuseArticle() {
    let articles_id = this.ctx.request.body.articles_id;
    let result = await this.service.systemModule.refuseArticle(articles_id);
    this.ctx.body = { ok: true, data: result };
  }
}
