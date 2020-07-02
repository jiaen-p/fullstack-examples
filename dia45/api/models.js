"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disco = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var discoSchema = new mongoose_1.default.Schema({
    titulo: String,
    interprete: String,
    anyoPublicacion: Number
});
exports.Disco = mongoose_1.default.model('Disco', discoSchema);
