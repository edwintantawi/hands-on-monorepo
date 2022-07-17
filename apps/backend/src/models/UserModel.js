"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UserModel = void 0;
var db_json_1 = __importDefault(require("../db.json"));
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.getAll = function () {
        return new Promise(function (resolve, reject) {
            var allUsers = db_json_1["default"].users;
            if (!allUsers)
                reject(null);
            resolve(allUsers);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
