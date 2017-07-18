"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = (function () {
    function Service(name, price) {
        this._name = name || null;
        this._price = price || 0;
    }
    Object.defineProperty(Service.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.preInitService = function () {
        console.log('BEFORE Service will be initialized');
    };
    Service.prototype.afterPropertiesWereSetToService = function () {
        console.log('AFTER Service received its props');
    };
    Service.prototype.preDestroyService = function () {
        console.log('BEFORE Service will bee destroyed');
    };
    return Service;
}());
exports.default = Service;
