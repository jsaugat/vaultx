/**
 * TASK: Dashboard API Loader
 *
 * You need to fetch multiple APIs in parallel using async/await.
 *
 * Requirements:
 * 1. Critical APIs: "user", "settings" — must succeed or dashboard fails.
 * 2. Optional API: "notifications" — failure should be handled gracefully.
 *
 * 3. Log:
 *    - Each API completion (success or failure)
 *    - "Dashboard ready!" when all critical APIs succeed
 *    - Error message if any critical API fails
 *
 * Constraints:
 * - Use async/await and Promise.all
 * - Handle optional API failures internally, so they don't reject Promise.all
 */

function fetchData(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1 && name !== "notifications") {
                console.log(name + " fulfilled")
                resolve(name + " resolved")
            } else {
                console.log(name + " failed")
                reject(name + " rejected")
            }
        }, time)
    })
}

async function run() {
    try {
        // Optional API handled internally
        const notificationPromise = fetchData("notifications", 500)
            .catch(err => {
                console.log("Optional API failed:", err)
                return null
            })

        const response = await Promise.all([
            fetchData("user", 500),
            fetchData("settings", 500),
            notificationPromise
        ])

        console.log("Dashboard ready! Final results:", response)
    } catch (error) {
        console.log("Critical API failed, cannot render dashboard:", error)
    }
}

run()

// Hence, if optional notifications API fails and others succeed, here is the output: 
// notifications failed
// Optional API failed: notifications rejected
// user fulfilled
// settings fulfilled
// Dashboard ready! Final results: [ 'user resolved', 'settings resolved', null ]
