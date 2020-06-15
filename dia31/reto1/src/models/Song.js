"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var songSchema = new mongoose_1.default.Schema({
    title: String,
    lenght: Number
});
exports.Song = mongoose_1.default.model('Song', songSchema);
