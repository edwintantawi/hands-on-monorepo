"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mainRoute_1 = __importDefault(require("./mainRoute"));
var adminRoute_1 = __importDefault(require("./adminRoute"));
var userRoute_1 = __importDefault(require("./userRoute"));
var routes = function (app) {
    var API_ROUTE = '/api';
    app.use('/', mainRoute_1["default"]);
    // API
    app.use("".concat(API_ROUTE, "/admins"), adminRoute_1["default"]);
    app.use("".concat(API_ROUTE, "/users"), userRoute_1["default"]);
};
exports["default"] = routes;
