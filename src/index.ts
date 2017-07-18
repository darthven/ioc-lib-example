import {MetadataContext} from 'ioc-lib.js/dist'
import User from "./entities/User";
import Service from "./services/Service";
const path = require('path');

//Paths to the configuration files with metadata
const configs = [__dirname + "/configs/context.json"];

//Creating application context based on metadata
let context = new MetadataContext(configs);

//Providing safe close for the application context
context.registerShutdownHook();

//Getting user's component instance from the application context
let userFromContext = context.getComponentEntityInstance('user');

//Creeating simple object of Service class
let service = new Service("Test service", 1455);

//Creating simple object of User class and inject service via constructor
let user = new User("Darthven", 25, ["066-240-52-63"], service);

console.log(`User created by the application context: ${userFromContext}`);
console.log(`User created by own hands: ${user}`);
