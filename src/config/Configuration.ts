import Admin from '../entities/Admin'
import User from '../entities/User'
import {component} from "ioc-lib.js";


export default class Configuration {

    @component({})
    public getAdminComponent(): Admin {
        return new Admin("darthven", 21, this.getUserComponent());
    }

    @component({
        id: "emptyUser"
    })
    public getEmptyUserComponent(): User {
        return new User();
    }

    @component({
        id: "userWithName"
    })
    public getUserComponent(): User {
        return new User("testUser3");
    }
}


