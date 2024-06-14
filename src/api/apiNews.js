import axios from 'axios';

export const getMangaList = async () => {
    try {
        const response = await axios.get('/api/mangaList');
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching manga list:', error);
        throw error;
    }
};
