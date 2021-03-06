"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var Song_1 = require("./Song");
var Album_1 = require("./Album");
var artistSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    songs: [{ type: mongoose_1.Schema.Types.ObjectId, ref: Song_1.Song }],
    album: [{ type: mongoose_1.Schema.Types.ObjectId, ref: Album_1.Album }]
});
exports.Artist = mongoose_1.default.model('Artist', artistSchema);
