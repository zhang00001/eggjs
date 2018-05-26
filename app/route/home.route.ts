import { Application } from "egg";

module.exports = (app: Application) => {
  const { controller, router } = app;

  router
    .all("/", controller.home.index)
    .get("/header", controller.home.getHeader)
    .get("/home", controller.home.getHome)
    .get("/about", controller.home.getAbout)
    .get("/services", controller.home.getServices)
    .get("/news-2", controller.home.getNews2)
    .get("/news", controller.home.getNew)
    .get("/job", controller.home.getJob)
    .get("/contact", controller.home.getContact)
    .get("/offical", controller.home.getOffical)
    .get("/election", controller.home.getElection)
    .get("/industry", controller.home.getIndustryn)
    .get("/app", controller.home.getApp)
    .get("/interaction", controller.home.getInteraction)
    .get("/we-chat", controller.home.getWechat)
    .get("/article-detail", controller.home.getArticleDetail)
    .get("/case-detail", controller.home.getCaseDetail);
  // .get('/h5/say-hello',controller.h5.sayHello)
  // .get('/h5/send-auth-code',controller.h5.sendAuthcode)
  // .post("/Wap/sendSms",controller.home.sendSms)
  // .post("/",controller.home.signup)
};
