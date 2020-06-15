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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var photo_1 = require("./src/routes/photo");
var user_1 = require("./src/routes/user");
var timeline_1 = require("./src/routes/timeline");
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose_1.default.connect("mongodb://localhost:27017/codenotch", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch(function (err) { return console.log(err); });
app.use("/photos", photo_1.router);
app.use("/users", user_1.router);
app.use("/timeline", timeline_1.router);
var port = 3000;
app.listen(port, function () { console.log("Listening on port", port); });
