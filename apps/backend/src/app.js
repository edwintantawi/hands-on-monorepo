"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 5000;
app.set('views', path_1["default"].join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1["default"].static(path_1["default"].join(__dirname, 'public')));
(0, routes_1["default"])(app);
app.listen(PORT, function () {
    return console.log("server running in http://localhost:".concat(PORT));
});
