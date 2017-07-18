"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("ioc-lib.js/dist");
var User_1 = require("./entities/User");
var Service_1 = require("./services/Service");
var path = require('path');
//Paths to the configuration files with metadata
var configs = [__dirname + "/configs/context.json"];
//Creating application context based on metadata
var context = new dist_1.MetadataContext(configs);
//Providing safe close for the application context
context.registerShutdownHook();
//Getting user's component instance from the application context
var userFromContext = context.getComponentEntityInstance('user');
//Creeating simple object of Service class
var service = new Service_1.default("Test service", 1455);
//Creating simple object of User class and inject service via constructor
var user = new User_1.default("Darthven", 25, ["066-240-52-63"], service);
console.log("User created by the application context:\n " + JSON.stringify(userFromContext, null, 4));
console.log("User created by own hands:\n " + JSON.stringify(user, null, 4));
