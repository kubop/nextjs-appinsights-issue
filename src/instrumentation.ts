let appInsights: any

export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        console.log("Instrumentation is importing...")
        appInsights = await import('applicationinsights')
        appInsights.setup("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").start();
        console.log("Done")
    }
}

export { appInsights }