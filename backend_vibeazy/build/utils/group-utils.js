"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGroupLink = generateGroupLink;
function generateGroupLink(length) {
    var stringLength = length || 10;
    var id = '';
    var characters = '0123456789abcdefghijlmnopqrstuvwxyz';
    while (id.length < stringLength) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        var char = characters.charAt(randomIndex);
        id += char;
    }
    return "vibeazy-".concat(id);
}
