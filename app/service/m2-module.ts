import { Service } from "egg";
import db = require("../model");
// import { M2User } from "../model/m2-user";
// import { userInfo } from "os";
export default class M2 extends Service {
  async m2Login(shop_id, password) {
    let users = await db.m2centraldb.query(
      `SELECT * FROM shop left join user on shop.shop_id = user.user_id where shop.shop_id = ${shop_id} and user.password =${password};`
    );
    if (users[0]) {
      console.log(users[0], users.values);
      switch (users[0][0].user_type) {
        case "0":
        case "00":
          return [];
        case "1":
          return await db.moduleModel.findAll({
            where: { id: { $in: [11, 12, 13] } }
          });
        default:
          return [];
      }
    } else {
      return [];
    }
  }
}
