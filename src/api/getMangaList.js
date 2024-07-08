import axios from 'axios';

export const getMangaList = async (params) => {
    try {
        const response = await axios.get(`/api/mangaList`, {
            params: params
        });
        await console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching manga list:', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get('/api/mangaList', {
            params: {}
        });
        return response.data.metaData.category;
    } catch (error) {
        console.error('Error fetching manga list:', error);
        throw error;
    }
};

export const searchManga = async (query, page = 1) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/search/${query}`, {
            params: {page}
        });
        return response.data;
    } catch (error) {
        console.error('Error searching manga:', error);
        throw error;
    }
};
