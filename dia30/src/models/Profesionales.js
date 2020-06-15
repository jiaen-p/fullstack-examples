"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesional = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var profesionalShema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    weight: Number,
    height: Number,
    nationality: String,
    isRetired: Boolean,
    profesion: {
        type: String,
        enum: ["actor", "director", "writer"]
    },
    hairColor: String,
    eyeColor: String,
    race: String,
    oscarNum: Number
});
exports.Profesional = mongoose_1.default.model('Profesional', profesionalShema);
