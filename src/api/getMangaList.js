import axios from 'axios';

export const getMangaList = async (page = 3, category) => {
    try {
        const response = await axios.get('/api/mangaList', {
            params: {
                page,
                category
            }
        });
        // console.log(response.data.metaData.category)
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
        // console.log(response)
        return response.data.metaData.category;
    } catch (error) {
        console.error('Error fetching manga list:', error);
        throw error;
    }
};
