const fetchData = (name, time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const isSuccess = Math.random() > 0.5
        if (isSuccess) {
            console.log(name + " finished successfully")
            resolve(name + " success")
        } else {
            console.log(name + " failed")
            reject(name + " failed")
        }
    }, time)
})

async function run() {
    try {
        const results = await Promise.all([
            fetchData("user", 500),
            fetchData("notifications", 500),
            fetchData("settings", 500)
        ])
        console.log("All succeeded:", results)
    } catch (error) {
        console.log("At least one failed:", error)
    }
}

run()
