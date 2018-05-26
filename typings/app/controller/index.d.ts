// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Admin from '../../../app/controller/admin';
import Common from '../../../app/controller/common';
import H5 from '../../../app/controller/h5';
import Home from '../../../app/controller/home';
import M2Admin from '../../../app/controller/m2-admin';
import Wechat from '../../../app/controller/wechat';

declare module 'egg' {
  interface IController {
    admin: Admin;
    common: Common;
    h5: H5;
    home: Home;
    m2Admin: M2Admin;
    wechat: Wechat;
  }
}
