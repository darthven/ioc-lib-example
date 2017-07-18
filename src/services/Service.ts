class Service {

    private _name: string;

    private _price: number;

    constructor();

    constructor(name: string, price: number);

    constructor(name?: string, price?: number) {
        this._name = name || null;
        this._price = price || 0;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    public preInitService() : void {
        console.log('BEFORE Service will be initialized');
    }

    public afterPropertiesWereSetToService() : void {
        console.log('AFTER Service received its props');
    }

    public preDestroyService() : void {
        console.log('BEFORE Service will bee destroyed');
    }
}

export default Service;