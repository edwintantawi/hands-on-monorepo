"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.EndpointModel = void 0;
var db_json_1 = __importDefault(require("../db.json"));
var EndpointModel = /** @class */ (function () {
    function EndpointModel() {
    }
    EndpointModel.getAll = function () {
        return new Promise(function (resolve, reject) {
            var allEndpoint = db_json_1["default"].endpoints;
            if (!allEndpoint)
                reject(null);
            resolve(allEndpoint);
        });
    };
    return EndpointModel;
}());
exports.EndpointModel = EndpointModel;
