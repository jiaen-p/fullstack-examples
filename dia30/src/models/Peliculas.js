"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var peliculaSchema = new mongoose_1.default.Schema({
    title: String,
    realeaseYear: Number,
    actors: [String],
    directors: [String],
    writers: [String],
    language: String,
    nationality: String,
    platform: String,
    distributor: String,
    isMCU: Boolean,
    producer: String,
    url: String,
    genre: String
});
exports.Pelicula = mongoose_1.default.model('Pelicula', peliculaSchema);
