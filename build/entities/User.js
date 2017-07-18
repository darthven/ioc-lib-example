"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(name, age, phoneNumbers, service) {
        this._name = name || null;
        this._age = age || 0;
        this._phoneNumbers = phoneNumbers || [];
        this._service = service || null;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phoneNumbers", {
        get: function () {
            return this._phoneNumbers;
        },
        set: function (value) {
            this._phoneNumbers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.preInitUser = function () {
        console.log('BEFORE User will be initialized');
    };
    User.prototype.postInitUser = function () {
        console.log('AFTER User will be initialized');
    };
    User.prototype.beforePropertiesWereSetToUser = function () {
        console.log('BEFORE User received its props');
    };
    User.prototype.afterPropertiesWereSetToUser = function () {
        console.log('AFTER User received its props');
    };
    User.prototype.preDestroyUser = function () {
        console.log('BEFORE User will be destroyed');
    };
    User.prototype.postDestroyUser = function () {
        console.log('AFTER User will be destroyed');
    };
    return User;
}());
exports.default = User;
