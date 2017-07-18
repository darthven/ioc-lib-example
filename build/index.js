"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kokh0716 on 6/27/2017.
 */
var dist_1 = require("ioc-lib.js/dist");
var User_1 = require("./entities/User");
var Service_1 = require("./services/Service");
var path = require('path');
var configs = [__dirname + "/configs/context.json"];
var context = new dist_1.MetadataContext(configs);
context.registerShutdownHook();
var userConf = context.getComponentEntityInstance('user');
// const config = new UserConfig();
//
// let user = config.getUserComponent();
var service = new Service_1.default("Test service", 1455);
//
var user = new User_1.default("Darthven", 25, ["066-240-52-63"], service);
// Object.keys(User.prototype).forEach((key) => {
//     console.log(key);
// });
console.log(userConf);
console.log(user);
//console.log(user['getClassPath'].call()) 
