// Assuming you have a way to extract the token, perhaps from cookies or context
function getToken() {
    // This is a placeholder function. You'll need to replace this logic
    // with your method of obtaining the token, depending on where and how
    // you're planning to use this fetch wrapper.
    const headersList = headers(); // This might not be directly usable as shown, depending on your context
    const token = headersList.get("cookie").replace("token=", "");
    return token;
}

async function customFetch(url, options = {}) {
    const token = getToken(); // Get your auth token from cookies or other storage

    // Set default headers
    const headers = {
        'Accept': 'application/json',
    };

    // Add Authorization header if token exists
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
        headers['jwt'] = token;
    }

    // If body is FormData, adjust Content-Type header
    // Note: Fetch doesn't automatically set the boundary for multipart/form-data
    if (options.body instanceof FormData) {
        delete headers['Content-Type']; // Let the browser set it
    } else {
        headers['Content-Type'] = 'application/json';
    }

    // Combine user options with the headers
    const fetchOptions = {
        ...options,
        headers,
    };

    // Perform the fetch request
    const response = await fetch(url, fetchOptions);

    // Handle response or errors
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json(); // Or handle as needed
}

export default customFetch;
