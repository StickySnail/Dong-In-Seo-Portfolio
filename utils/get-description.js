export async function getDescription_api() {
    try {
        const response = await fetch("/api/getDescription");

        if (!response.ok) {
            console.error("Response status:", response.status);
            console.error("Response text:", await response.text());
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.description;
    } catch (error) {
        console.error("Error fetching description:", error);
        throw error;
    }
}
