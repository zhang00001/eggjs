import { Application } from "egg";

module.exports = (app: Application) => {
  const { controller, router } = app;
  let adminApi = {
    login: "/admin/login",
    systemModule: {
      getModulePage: "/admin/get-modulePage", //模块分页
      getModuleAll: "/admin/get-module-all", //所有模块列表
      createModule: "/admin/create-module", //创建模块
      deleteModule: "/admin/delete-module", //删除
      updateModule: "/admin/update-module", //更新模块
      findModule: "/admin/find-module", //查找模块
      getRolePage: "/admin/get-role", //角色列比分页
      createRole: "/admin/create-role", //创建角色
      deleteRole: "/admin/delete-role", //删除角色
      updateRole: "/admin/update-role", //更新角色
      findRole: "/admin/find-role", //查找角色
      createUser: "/admin/create-user", //创建用户
      deleteUser: "/admin/delete-user", //删除用户
      updateUser: "/admin/update-user", //更新用户
      getUserList: "/admin/get-user-list", //用户分页
      getRoleAll: "/admin/get-all-role", //获取所有角色列表
      PostLogin: "/admin/login", //用户的权限列表
      GetArticlesPage: "/admin/get-articles-list", //文章列表
      createArticles: "/admin/create-articles", //新增文章
      deleteArticles: "/admin/delete-articles", //删除文章
      updateArticles: "/admin/update-articles", //更新文章
      createCategroy: "/admin/create-article-categroy", //新增文章分组
      deleteCategroy: "/admin/delete-article-categroy", //删除文章分组
      getArticleTypePage: "/admin/article/get-article-type-page", //文章组列表分页
      updateCategroy: "/admin/update-article-categroy", //更新文章组
      getArticleTypeAll: "/admin/get-article-categroy-all", //获取所有文章分类
      getCommonPage: "/admin/get-commonpage", //获取所有的评论
      createCommon: "/admin/create-commons", //新增评论
      recommandArticle: "/admin/recommand-article", //推荐文章
      passArticle: "/admin/pass-article", //通过文章审核
      refuseArticle: "/admin/refuse-article", //文章审核不通过
      //邦为业务
      m2Login: "/admin/m2-login" //邦为登录
    }
  };

  router
    .post(adminApi.login, controller.admin.postUserAndModuleList)
    .get(adminApi.systemModule.getModuleAll, controller.admin.getModuleAll)
    .get(adminApi.systemModule.getModulePage, controller.admin.getModulePage)
    .post(adminApi.systemModule.createModule, controller.admin.createModule)
    .post(adminApi.systemModule.deleteModule, controller.admin.deleteModule)
    .post(adminApi.systemModule.updateModule, controller.admin.updateModule)
    .get(adminApi.systemModule.findModule, controller.admin.findModule)
    .get(adminApi.systemModule.getRolePage, controller.admin.getRolePage)
    .post(adminApi.systemModule.createRole, controller.admin.createRole)
    .post(adminApi.systemModule.deleteRole, controller.admin.deleteRole)
    .post(adminApi.systemModule.updateRole, controller.admin.updateRole)
    .get(adminApi.systemModule.findRole, controller.admin.findRole)
    .post(adminApi.systemModule.createUser, controller.admin.createUser)
    .post(adminApi.systemModule.deleteUser, controller.admin.deleteUser)
    .post(adminApi.systemModule.updateUser, controller.admin.updateUser)
    .get(adminApi.systemModule.getUserList, controller.admin.getUserList)
    .get(adminApi.systemModule.getRoleAll, controller.admin.getRoleAll)
    .post(adminApi.systemModule.PostLogin, controller.admin.PostLogin)
    .post(adminApi.systemModule.createCategroy, controller.admin.createCategroy)
    .post(adminApi.systemModule.deleteCategroy, controller.admin.deleteCategroy)
    .get(
      adminApi.systemModule.getArticleTypePage,
      controller.admin.getArticleTypePage
    )
    .get(
      adminApi.systemModule.GetArticlesPage,
      controller.admin.GetArticlesPage
    )
    .get(
      adminApi.systemModule.getArticleTypeAll,
      controller.admin.getArticleTypeAll
    )
    .post(adminApi.systemModule.createArticles, controller.admin.createArticles)
    .post(adminApi.systemModule.updateCategroy, controller.admin.updateCategroy)
    .get(adminApi.systemModule.getCommonPage, controller.admin.getCommonPage)
    .post(adminApi.systemModule.createCommon, controller.admin.createCommon)
    .post(
      adminApi.systemModule.recommandArticle,
      controller.admin.recommandArticle
    )
    .post(adminApi.systemModule.updateArticles, controller.admin.updateArticles)
    .post(adminApi.systemModule.passArticle, controller.admin.passArticle)
    .post(
      adminApi.systemModule.refuseArticle,
      controller.admin.recommandArticle
    )
    // 邦为业务
    .post(adminApi.systemModule.m2Login, controller.m2Admin.m2Login);
};
