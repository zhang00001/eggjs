import { Controller } from "egg";

export default class M2Controller extends Controller {
  async m2Login() {
    let { shop_id, password } = this.ctx.request.body;
    let result = await this.service.m2Module.m2Login(shop_id, password);

    this.ctx.body = {
      ok: result.length > 0,
      data: result.length > 0 ? result : "没有访问权限"
    };
  }
}
