"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var photoSchema = new mongoose_1.default.Schema({
    titulo: String,
    url: String,
    description: String,
    nombre: String
});
exports.Photo = mongoose_1.default.model('Photo', photoSchema);
