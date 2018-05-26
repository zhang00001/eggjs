// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Alidayu from '../../../app/service/alidayu';
import Calc from '../../../app/service/Calc';
import M2Module from '../../../app/service/m2-module';
import Oss from '../../../app/service/oss';
import Qrcode from '../../../app/service/qrcode';
import SystemModule from '../../../app/service/system-module';
import Test from '../../../app/service/Test';
import Wechat from '../../../app/service/wechat';

declare module 'egg' {
  interface IService {
    alidayu: Alidayu;
    calc: Calc;
    m2Module: M2Module;
    oss: Oss;
    qrcode: Qrcode;
    systemModule: SystemModule;
    test: Test;
    wechat: Wechat;
  }
}
