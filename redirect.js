// Set the time delay in milliseconds (e.g., 5000 milliseconds = 5 seconds)
const redirectDelay = 2000;

// Function to redirect to your Webflow website
function redirectToWebflow() {
  window.location.href = 'https://saihemanthuppala.framer.website';
}

// Set a timeout to redirect after the specified delay
setTimeout(redirectToWebflow, redirectDelay);
