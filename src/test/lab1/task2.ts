let temp: number = 25
if (temp < -10) {
    console.log('очень холодно')
} else if (temp >= -10 && temp < 10) {
    console.log('холодно')
} else if (temp >= 10 && temp < 18) {
    console.log('прохладно')
} else if (temp >= 18 && temp < 25) {
    console.log('тепло')
} else {
    console.log('жарко')
}

