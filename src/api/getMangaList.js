import axios from 'axios';

export const getMangaList = async (page = 1) => {
    try {
        const response = await axios.get('/api/mangaList', {
            params: {
                page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching manga list:', error);
        throw error;
    }
};
