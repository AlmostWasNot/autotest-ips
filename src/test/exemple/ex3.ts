const tryComplete = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
        clearTimeout(id);
        const promise: Promise<string> = new Promise(
            resolve => resolve('resolve'))
        promise.then(value => console.log(value))
    }, 1000)

    let id1 = setTimeout(() => {
        clearTimeout(id1);
        const promise1: Promise<string> = new Promise(
            reject => reject('reject'))
        promise1.then(value => console.log(value))
    }, 100)

})

tryComplete