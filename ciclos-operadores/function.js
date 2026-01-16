function calculateDiscountPrice (price, discountPercentage){
    const discount = (price * discountPercentage)/100
    const priceWithDiscount = price - discount

    return priceWithDiscount

}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)
console.log('original price: $' + originalPrice)
console.log('Discoun: ' + discountPercentage + '%')
console.log('price with discount: $' + finalPrice)