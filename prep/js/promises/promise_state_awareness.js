//resolves with "success" if shouldFail === false
//rejects with "error" if true

function wait(ms, shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("error")
            } else {
                resolve("success")
            }

        }, ms)
    })
}

//? 'throw' inside async code does not affect the Promise
//? only reject() controls Promise state
//! This distinction is HUGE in real BUGS.

wait(3000, true)
    .then(console.log)
    .catch(console.error)
    .then(() => console.log("error is caught and promise is resolved successfully again")) //! INSANE!! because after rejecting, this LOC RUNS

