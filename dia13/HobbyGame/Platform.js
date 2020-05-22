"use strict";
exports.__esModule = true;
exports.Platform = void 0;
var StorageDevice;
(function (StorageDevice) {
    StorageDevice["dvd"] = "dvd";
    StorageDevice["cartucho"] = "cartucho";
    StorageDevice["tarjeta"] = "tarjeta";
    StorageDevice["cd"] = "cd";
    StorageDevice["bluray"] = "bluray";
})(StorageDevice || (StorageDevice = {}));
var Platform = /** @class */ (function () {
    function Platform(name, releaseYear, company, nBits, generation, hasHD, hdSize, hasInternetConnection, storageDevice, color) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = hasInternetConnection;
        this.storageDevice = storageDevice;
        this.color = color;
    }
    Platform.prototype.samePlatform = function (p) {
        return this.name === p.name && this.releaseYear === p.releaseYear && this.company === p.company
            && this.nBits === p.nBits && this.generation === p.generation && this.hasHD === p.hasHD &&
            this.hdSize === p.hdSize && this.hasInternetConnection === p.hasInternetConnection
            && this.storageDevice === p.storageDevice && this.color === p.color;
    };
    Platform.prototype.print = function () {
        console.log(this.toString());
    };
    Platform.prototype.toString = function () {
        return ("\n        Name: " + this.name + "\n        Year released: " + this.releaseYear + "\n        Company: " + this.company + "\n        Number of bits: " + this.nBits + "\n        Generation: " + this.generation + "\n        Has HD: " + this.hasHD + "\n        HD size(GB): " + this.hdSize + "\n        Has Internet Connection: " + this.hasInternetConnection + "\n        Type of storage: " + this.storageDevice + "\n        Color: " + this.color + "\n        ");
    };
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.setName = function (name) {
        this.name = name;
    };
    Platform.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Platform.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.setCompany = function (company) {
        this.company = company;
    };
    Platform.prototype.getNBits = function () {
        return this.nBits;
    };
    Platform.prototype.setNBits = function (nBits) {
        this.nBits = nBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.setGeneration = function (generation) {
        this.generation = generation;
    };
    Platform.prototype.getHasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.setHasHD = function (hasHD) {
        this.hasHD = hasHD;
    };
    Platform.prototype.getHdSize = function () {
        return this.hdSize;
    };
    Platform.prototype.setHdSize = function (hdSize) {
        this.hdSize = hdSize;
    };
    Platform.prototype.getHasInternetConnection = function () {
        return this.hasInternetConnection;
    };
    Platform.prototype.setHasInternetConnection = function (hasInternetConnection) {
        this.hasInternetConnection = hasInternetConnection;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Platform.prototype.setStorageDevice = function (storageDevice) {
        this.storageDevice = storageDevice;
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    Platform.prototype.setColor = function (color) {
        this.color = color;
    };
    return Platform;
}());
exports.Platform = Platform;
