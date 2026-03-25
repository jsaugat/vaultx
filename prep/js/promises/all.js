function learn() {
    Promise.all([
        new Promise(res => setTimeout(() => { res(); console.log("first done") }, 50)),
        new Promise((res, rej) => setTimeout(() => { rej("second failed") }, 300)),
        new Promise(res => setTimeout(() => { res(); console.log("third done") }, 100))
    ])
        .then(() => console.log("all resolved"))
        .catch(err => console.log("all rejected:", err))

}

// Real Life Example: 
// Scenario:

// You’re building a dashboard that needs to show 3 pieces of data at once:
// 1. User profile
// 2. Notifications
// 3. Settings

// All three are fetched from separate API endpoints
// You want Promise.all so the dashboard shows only when everything is ready
// If any API fails, you should immediately stop and show an error

const fetchData = (name, time) => {
    return new Promise((resolve, reject) => {
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
}


Promise.all([
    fetchData("user", 500),
    fetchData("notification", 500),
    fetchData("settings", 500)
]).then(console.log)
    .catch(console.error)

//! FAIL-FAST: 
//! If any of the three Promises rejects (random chance here), Promise.all immediately goes to .catch.
//! Even if other Promises haven’t finished yet, Promise.all does not wait for them to resolve.
//! This is exactly the fail-fast behavior in real APIs: if a critical resource fails, you can show an error immediately instead of showing a broken dashboard.