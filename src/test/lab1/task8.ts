function getRandomString(a: number): string {
    let symbols: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    let str: string = ''
    for (let i = 0; i < a; i++) {
        str = str + (symbols[Math.floor(Math.random() * symbols.length)])
    }
    return str
}
let ranstr = getRandomString(4)
console.log(ranstr)


//функция должна возвращать строку