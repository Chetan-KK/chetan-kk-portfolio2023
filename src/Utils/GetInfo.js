const fetchInfo = async () => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/chetan-kk/chetan-kk/main/information/information.json"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch project data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export default fetchInfo; 