import {DecoratorContext} from 'ioc-lib.js'
import Configuration from "./config/Configuration"
import Admin from "./entities/Admin";

//Passing configuration classes here
const configs = [Configuration];

//Creating decorator's context based on this configuration
let decoratorCtx = new DecoratorContext([Configuration]);

//Providing safe close for the application context
decoratorCtx.registerShutdownHook();

//Retrieving admin component instance from the context by the class name
const admin = decoratorCtx.getComponentEntityInstanceByClass(Admin);
console.log(`Admin from decorator's context:\n${JSON.stringify(admin, null, 4)}`);

//Retrieving user component instance from the context by the unique identifier
const user = decoratorCtx.getComponentEntityInstanceById('userWithName');
console.log(`User from decorator's context:\n${JSON.stringify(user, null, 4)}`);