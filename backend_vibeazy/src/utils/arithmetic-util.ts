
export function calculateDiscountedAmount(amount: number, discount: number): number  {
    if(discount > 100){
        return amount
    }
    const discountAmount = (amount * discount) / 100
    return amount - discountAmount
}