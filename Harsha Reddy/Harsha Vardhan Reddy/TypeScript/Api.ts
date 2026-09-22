function fetchEndpoint(service: string, delayMs: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`[200 OK] Response data from ${service}`);
        }, delayMs);
    });
}

async function processPipeline(username: string): Promise<void> {
    console.log(`Initiating sequential pipeline for user: "${username}"...\n`);

    console.log("1. Fetching Authentication Service...");
    const authResult: string = await fetchEndpoint("Auth API", 800);
    console.log(`   -> ${authResult}`);

    console.log("2. Fetching User Permissions Service...");
    const permResult: string = await fetchEndpoint("Permissions API", 600);
    console.log(`   -> ${permResult}`);

    console.log("3. Fetching User Activity Feed...");
    const feedResult: string = await fetchEndpoint("Activity Feed API", 400);
    console.log(`   -> ${feedResult}`);

    console.log("\nPipeline finished: All 3 APIs executed sequentially.");
}

const user = prompt("Enter user identifier to trigger API sequence:") || "Guest";

processPipeline(user);