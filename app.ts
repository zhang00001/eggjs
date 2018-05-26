import { Application } from "egg";

module.exports = (app: Application) => {
  app.once("server", _ => {
    // websocket
  });
  app.on("error", (_, __) => {
    // report error
  });
  app.on("request", _ => {
    // log receive request
  });
  app.on("response", ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log(`start use ${used} ms`);
    // log total cost
  });
};

Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
