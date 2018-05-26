import { Service } from "egg";
import SMSClient = require("@alicloud/sms-sdk");

const accessKeyId = "LTAIXNz9RofEzNdt";
const secretAccessKey = "rP56ZQzx2OYugGt9J7jYDxcywiPivF";
let smsClient = new SMSClient({ accessKeyId, secretAccessKey });

export default class Alidayu extends Service {
  private getRandomCode() {
    return (Math.random() * 10000).toFixed(0);
  }
  async sendUserRegisiterAuthCode(phone: string, code?: string) {
    if (!code) {
      code = this.getRandomCode();
    }
    return smsClient.sendSMS({
      PhoneNumbers: phone,
      SignName: "邦为2",
      TemplateCode: "SMS_134323635",
      TemplateParam: `{"code":"${code}"}`,
      OutId: code
    });
  }
  async queryUserRegisiterAuthCode(phone: string, authcode?: string) {
    let res = await smsClient.queryDetail({
      PhoneNumber: phone,
      SendDate: new Date().format("yyyyMMdd"),
      PageSize: "10",
      CurrentPage: "1"
    });
    if ((res.Code = "ok")) {
      console.log(res);
      let detail = res.SmsSendDetailDTOs.SmsSendDetailDTO[0];
      if (detail) {
        return detail.OutId == authcode;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
