const pricecookie: number[] = [50, 120, 1200, 666, 219]
let price: number
let infprice: number = 0.2
pricecookie.forEach((price: number) => console.log(price, '-', price + (price * infprice)))

//использовать переменную в строке