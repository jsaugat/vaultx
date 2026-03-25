// A function that retries a Promise-based operation n times before failing.

function retryOperation(operation, maxRetries) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        function attempt() {
            operation()
                .then((result) => {
                    // Success: resolve once and exit forever
                    resolve(result);
                })
                .catch((error) => {
                    attempts++;

                    if (attempts > maxRetries) {
                        // Final failure: reject once
                        reject(error);
                    } else {
                        // Failure but retries left: try again
                        attempt();
                    }
                });
        }

        // Start first attempt
        attempt();
    });
}
