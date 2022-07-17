"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AdminModel = void 0;
var db_json_1 = __importDefault(require("../db.json"));
var AdminModel = /** @class */ (function () {
    function AdminModel() {
    }
    AdminModel.getAll = function () {
        return new Promise(function (resolve, reject) {
            var allAdmin = db_json_1["default"].admins;
            if (!allAdmin)
                reject(null);
            resolve(allAdmin);
        });
    };
    return AdminModel;
}());
exports.AdminModel = AdminModel;
