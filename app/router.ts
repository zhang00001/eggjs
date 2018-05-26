import { Application } from "egg";

export default (app: Application) => {
  require("./route/admin.route")(app);
  require("./route/home.route")(app);
  require("./route/common.route")(app);
};
