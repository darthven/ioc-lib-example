import Service from "../services/Service";

class User {

    private _name: string;

    private _age: number;

    private _phoneNumbers: string[];

    private _service: Service;

    constructor();

    constructor(name: string, age: number, phoneNumbers: string[], service: Service);

    constructor(name?: string, age?: number, phoneNumbers?: string[], service?: Service) {
        this._name = name || null;
        this._age = age || 0;
        this._phoneNumbers = phoneNumbers || [];
        this._service = service || null;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get phoneNumbers(): string[] {
        return this._phoneNumbers;
    }

    set phoneNumbers(value: string[]) {
        this._phoneNumbers = value;
    }

    get service(): Service {
        return this._service;
    }

    set service(value: Service) {
        this._service = value;
    }

    public preInitUser(): void {
        console.log('BEFORE User will be initialized');
    }

    public postInitUser(): void {
        console.log('AFTER User will be initialized');
    }

    public beforePropertiesWereSetToUser(): void {
        console.log('BEFORE User received its props');
    }

    public afterPropertiesWereSetToUser(): void {
        console.log('AFTER User received its props');
    }

    public preDestroyUser(): void {
        console.log('BEFORE User will be destroyed');
    }

    public postDestroyUser(): void {
        console.log('AFTER User will be destroyed');
    }
}

export default User;