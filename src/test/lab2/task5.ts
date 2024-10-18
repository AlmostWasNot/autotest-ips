function tryComplete(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)
    })

}

async function print(): Promise<void> {
    const result = await tryComplete()
    console.log(result)
}

print()