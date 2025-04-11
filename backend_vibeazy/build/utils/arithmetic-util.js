"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscountedAmount = calculateDiscountedAmount;
function calculateDiscountedAmount(amount, discount) {
    if (discount > 100) {
        return amount;
    }
    var discountAmount = (amount * discount) / 100;
    return amount - discountAmount;
}
