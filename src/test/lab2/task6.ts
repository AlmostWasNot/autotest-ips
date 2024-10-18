const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve'), 1000)
    setTimeout(() => reject('error'), 100)
})
promise.then(
    value => console.log(value),
    error => console.log(error)
)