/**
 * Created by kokh0716 on 6/27/2017.
 */
import {MetadataContext} from 'ioc-lib.js/dist'
import User from "./entities/User";
import Service from "./services/Service";

const path = require('path');

const configs = [__dirname + "/configs/context.json"];

let context = new MetadataContext(configs);
context.registerShutdownHook();

let userConf = context.getComponentEntityInstance('user');



// const config = new UserConfig();
//
// let user = config.getUserComponent();

let service = new Service("Test service", 1455);
//
let user = new User("Darthven", 25, ["066-240-52-63"], service);

// Object.keys(User.prototype).forEach((key) => {
//     console.log(key);
// });

console.log(userConf);
console.log(user);




//console.log(user['getClassPath'].call())