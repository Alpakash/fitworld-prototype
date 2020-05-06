export async function postRequest(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });
    return response.json()
}

// function to create magicString. Index 1, 3 and 5 are a number between 4-6
