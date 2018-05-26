import { Service } from "egg";
import db = require("../model");
import { Op, FindOptions } from "sequelize";
export default class extends Service {
  async postUserAndModuleList(username, password) {
    let user = await db.userModel.findOne({ where: { username, password } });

    if (user) {
      let role = await db.roleModel.findById(user["role_id"]);
      if (role) {
        let modules = await db.moduleModel.findAll({
          where: { id: { $in: JSON.parse(role.modules_ids as string) } }
        });

        return { user, modules };
      } else {
        return { user, modules: [] };
      }
    } else {
      return "用户不存在";
    }
  }

  async getModulePage(page = 0, pageSize = 10) {
    let list = await db.m2centraldb.query(
      `SELECT modules.name,modules.key_word,modules.parent_id ,modules.can_delete,  modules.id ,modules.link,modules.sort,modules.icon_font,m2.name 
      as parent FROM modules left join modules m2 on modules.parent_id = m2.id limit ${pageSize} offset ${page *
        pageSize} ;`
    );
    let total = await db.moduleModel.count();
    return { list: list[0], total };
  }
  getModuleAll() {
    return db.moduleModel.findAll();
  }
  createModule(newModule) {
    return db.moduleModel.create(newModule);
  }
  deleteModule(module_ids) {
    return db.moduleModel.destroy({ where: { id: module_ids } });
  }
  updateModule(module_id, module) {
    return db.moduleModel.update(module, { where: { id: module_id } });
  }
  findModule(keyword: string) {
    return db.moduleModel.findAll({
      where: {
        [Op.or]: [{ name: { $like: `%${keyword}%` } }, { id: keyword }]
      }
    });
  }
  async getRolePage(page = 0, pageSize = 10) {
    let list = await db.roleModel.findAll({
      limit: 10,
      offset: page * pageSize
    });
    let total = await db.roleModel.count();
    return { total, list };
  }

  createRole(newModule) {
    return db.roleModel.create(newModule);
  }
  deleteRole(role_ids) {
    return db.roleModel.destroy({ where: { id: role_ids } });
  }
  updateRole(role_id, role) {
    return db.roleModel.update(role, { where: { id: role_id } });
  }
  findRole(keyword: string) {
    return db.roleModel.findAll({
      where: {
        [Op.or]: [{ name: { $like: `%${keyword}%` } }, { id: keyword }]
      }
    });
  }
  async getUserList(page = 0, pageSize = 10) {
    let list = await db.userModel.findAll({
      limit: 10,
      offset: page * pageSize
    });
    let total = await db.userModel.count();
    return { total, list };
  }
  getRoleAll() {
    return db.roleModel.findAll();
  }
  async createUser(newUser) {
    return db.userModel.create(newUser);
  }
  deleteUser(user_ids) {
    return db.userModel.destroy({ where: { id: user_ids } });
  }
  updateUser(user, user_id) {
    console.log(user, user_id);
    return db.userModel.update(user, { where: { id: user_id } });
  }
  async PostLogin(user_ids) {
    return db.userModel.findAll({ where: { id: user_ids } });
  }
  async GetArticlesPage(
    page: number = 0,
    pageSize = 10,
    option?: {
      keyword?: string;
      startTime?: Date;
      endTime?: Date;
      article_categroy_id?: number;
    }
  ) {
    page = Number.isInteger(page) ? page : parseInt(page as any);
    pageSize = Number.isInteger(pageSize)
      ? pageSize
      : parseInt(pageSize as any);

    let findOption: FindOptions<any> = {
      limit: pageSize,
      offset: page * pageSize,
      where: {}
    };

    // 特殊查找条件
    if (option) {
      if (option.keyword) {
        (findOption.where as any).title = { $like: `%${option.keyword}%` };
      }
      if (option.startTime || option.endTime) {
        let created_at: any = {};
        if (option.startTime) created_at.$gt = option.startTime;
        if (option.endTime) created_at.$lt = option.endTime;
        (findOption.where as any).created_at = created_at;
      }
      if (option.article_categroy_id) {
        (findOption.where as any).article_categroy_id =
          option.article_categroy_id;
      }
    }
    // console.log(option, (findOption as any)["where"]["created_at"]);

    let total = await db.articlesModel.findAndCount(findOption);
    total.rows.forEach(item => {
      item.images = (item.images as string).split(",");
    });
    return total;
  }

  async createArticles(newArticles) {
    return db.articlesModel.create(newArticles);
  }
  async deleteArticles(articles_ids) {
    return db.articlesModel.destroy({ where: { id: articles_ids } });
  }
  async updateArticles(articles, articles_id) {
    return db.articlesModel.update(articles, { where: { id: articles_id } });
  }
  async getArticleTypePage(page, pageSize) {
    let list = await db.CategroyModel.findAll({
      limit: 10,
      offset: page * pageSize
    });
    list.forEach(item => {
      item.images = (item.images as string).split(",");
    });
    let total = await db.CategroyModel.count();
    return { list, total };
  }
  async getArticleTypeAll() {
    return db.CategroyModel.findAll();
  }
  async createCategroy(categroys) {
    return db.CategroyModel.create(categroys);
  }

  async deleteCategroy(categroy_ids) {
    return db.CategroyModel.destroy({ where: { id: categroy_ids } });
  }
  async updateCategroy(categroys, categroys_id) {
    return db.CategroyModel.update(categroys, { where: { id: categroys_id } });
  }
  async getCommonPage() {
    return db.CommentsModel.findAll();
  }
  async createCommon(commons) {
    return db.CommentsModel.create(commons);
  }
  async recommandArticle(is_recommand, articles_id) {
    return db.articlesModel.update(
      { is_recommand },
      {
        where: { id: articles_id }
      }
    );
  }
  async passArticle(articles_id) {
    return db.articlesModel.update(
      { verify_status: db.VerifyStatus.okVerify },
      {
        where: { id: articles_id }
      }
    );
  }
  async refuseArticle(articles_id) {
    return db.articlesModel.update(
      { verify_status: db.VerifyStatus.failVerify },
      {
        where: { id: articles_id }
      }
    );
  }
}
