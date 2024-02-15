// Assuming you have a way to extract the token, perhaps from cookies or context

import { headers } from "next/headers";

function getToken() {

    const headersList = headers();
    const token = headersList.get("cookie").replace("token=", "");
    console.log({ token });
    return token;

}

async function customFetch(url, options = {}) {
    const token = getToken();

    const headers = {
        'Accept': 'application/json',
    };


    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    if (options.body instanceof FormData) {
        delete headers['Content-Type']; // Let the browser set it
    } else {
        headers['Content-Type'] = 'application/json';
    }

    console.log({ options });
    const fetchOptions = {
        ...options,
    };

    // Perform the fetch request
    const response = await fetch(url, fetchOptions);

    // Handle response or errors
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json({
        response: response
    }); // Or handle as needed
}

export default customFetch;
