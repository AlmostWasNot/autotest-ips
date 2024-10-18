const sum = (a: number, b: number) => {
    console.log('sum is:', a + b)
}
const minus = (a: number, b: number) => {
    console.log('sum is:', a - b)
}
const delet = (a: number, b: number) => {
    console.log('sum is:', a / b)
}
const umnoz = (a: number, b: number) => {
    console.log('sum is:', a * b)
}
function calc(a: number, b: number, callback: (a: number, b: number) => void) {
    callback(a, b)
}

calc(5, 5, sum)
calc(5, 5, minus)
calc(5, 5, delet)
calc(5, 5, umnoz)