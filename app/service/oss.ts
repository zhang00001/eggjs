import { Service } from "egg";
import { IOSSFile } from "../model/oss-file";
import db = require("../model");
export default class OSS extends Service {
  async put(filename: string, base64: string) {
    let pattern = /png|jpeg|jpg/.exec(base64);
    if (pattern) {
      base64 = base64.replace(
        new RegExp(`data:image/${pattern[0]};base64,`),
        ""
      );
    }
    let { ctx } = this;
    // console.log(base64);
    return ctx.oss.put(filename, Buffer.from(base64, "base64"));
  }

  async uploadImage(base64: string) {
    // let { ctx } = this;
    let filename = `/images/` + Date.now() + ".png";
    let response: OSSUploadResponse = await this.put(filename, base64);
    // console.log(ctx.model["common"]);
    return db.ossFileModel.create({
      url: response.url,
      name: filename,
      size: response.res.size,
      status: response.res.status,
      statusCode: response.res.statusCode,
      remoteAddress: response.res.remoteAddress
    } as IOSSFile);
  }
}
