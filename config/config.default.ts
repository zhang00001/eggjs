import { EggAppConfig, PowerPartial } from "egg";
const path = require("path");
// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;
  config.cluster = {
    listen: {
      port: 80,
      hostname: "0.0.0.0"
    }
  };
  config.static = {
    prefix: ""
  };
  config.view = {
    root: [
      path.join(appInfo.baseDir, "app/view"),
      path.join(appInfo.baseDir, "path/to/another")
    ].join(","),
    defaultViewEngine: "nunjucks",
    defaultExtension: ".html"
  };
 
  config.security = {
    domainWhiteList: ["http://localhost"],
    protocolWhiteList: ["http"],
    // domainWhiteList: [
    //   "www.airuanjian.vip",
    //   "open.weixin.qq.com",
    //   "http://localhost"
    // ],
    xframe: {
      enable: false
    },
    csrf: {
      ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    csp: {
      ignore: () => true
    }
  } as any;

  config.bodyParser = {
    enable: true,

    // encoding:'utf-8',
    jsonLimit: "10mb",
    formLimit: "10mb"
  } as any;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${
    appInfo.name
  }`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1525937567736_4466";

  // add your config here
  config.middleware = [];
  config.mysql = {
    // 单数据库信息配置
    clients: {
      customer: {
        // host
        host: "47.100.23.203",
        // 端口号
        port: "3306",
        // 用户名
        user: "misheng",
        // 密码
        password: "misheng",
        // 数据库名
        database: "customer"
      },

      zhangxiangsheng: {
        // host
        host: "47.100.23.203",
        // 端口号
        port: "3306",
        // 用户名
        user: "misheng",
        // 密码
        password: "misheng",
        // 数据库名
        database: "zhangxiangsheng"
      }
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };
  config.oss = {
    client: {
      accessKeyId: "LTAIcMnaxxUG7dbk",
      accessKeySecret: "VhNgQZrGYz7dXpiCUS8r36mbLgy6db",
      bucket: "bangwei-store",
      endpoint: "oss-cn-beijing.aliyuncs.com",
      timeout: "60s"
    }
  };

  return config;
};
