// Initialize Hyperswitch SDK
function initializeSDK() {
    // Code to initialize the SDK
}

// Fetch payment methods
function fetchPaymentMethods() {
    return new Promise((resolve, reject) => {
        // Simulating API call to fetch payment methods
        setTimeout(() => {
            const paymentMethods = ['Credit Card', 'PayPal', 'Google Pay', 'Apple Pay'];
            resolve(paymentMethods);
        }, 2000); // Simulated API latency of 2 seconds
    });
}

// Render payment methods
function renderPaymentMethods(paymentMethods) {
    // Code to render payment methods UI
    console.log('Rendering payment methods:', paymentMethods);
}

// Measure final render time
function measureFinalRenderTime(startTime) {
    const endTime = performance.now();
    const finalRenderTime = endTime - startTime;
    console.log('Final Render Time:', finalRenderTime.toFixed(2), 'milliseconds');
}

// Main function to initiate SDK and render payment methods
async function startCheckout() {
    const startTime = performance.now();

    initializeSDK();

    try {
        const paymentMethods = await fetchPaymentMethods();
        renderPaymentMethods(paymentMethods);
        measureFinalRenderTime(startTime);
    } catch (error) {
        console.error('Error fetching payment methods:', error);
    }
}

// Entry point
startCheckout();
