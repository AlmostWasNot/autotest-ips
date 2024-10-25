function tryComplete(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolve'), 1000)
        setTimeout(() => reject('error'), 100)
    })
}

async function print(): Promise<void> {
    try {
        console.log('resolve', tryComplete)
    } catch (err) {
        console.log('error', err)
    }
}