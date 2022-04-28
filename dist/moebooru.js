"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var API_1 = __importDefault(require("./API"));
var index_1 = require("./entities/index");
var Moebooru = /** @class */ (function () {
    function Moebooru() {
        this.api = new API_1["default"]();
        this.search = new index_1.Search(this.api);
        this.user = new index_1.User(this.api);
        this.post = new index_1.Post(this.api);
        this.tag = new index_1.Tag(this.api);
    }
    return Moebooru;
}());
exports["default"] = Moebooru;
module.exports["default"] = Moebooru;
__exportStar(require("./entities/index"), exports);
__exportStar(require("./types/index"), exports);
