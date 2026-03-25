function delay(ms) {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

delay(1000)
    .then(() => "A")
    .then(val => { throw Error("BLAST") })
    .then(val => console.log(val))
    .catch(err => console.log("error occured")) // catches rejection caused by the second .them

//fulfilled → fulfilled → rejected → (skip thens) → catch


/**
 * Explanation
 * - .then(fn) returns a new promise
 * - fn is run when previous promise is fulfilled
 * - if fn throws, reject the new Promise
 */