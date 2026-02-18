const price = 100
const discount = 0.2
const calculateDiscountedPrice1 = (price, discount) => `Cena po rabacie to ${price-price*discount} złotych.`
calculateDiscountedPrice1(price,discount)
const calculateDiscountedPrice2 = (originalAmount, discountAmount) => `Cena po rabacie to ${originalAmount-originalAmount*discountAmount} złotych.`
calculateDiscountedPrice2(price,discount)
