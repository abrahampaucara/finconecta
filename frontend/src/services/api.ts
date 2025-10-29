import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export const fetchItems = async (): Promise<any[]> => {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
};

export const createItem = async (itemData: any) => {
    const response = await axios.post(`${API_BASE_URL}/items`, itemData);
    return response.data;
};

export const fetchItemById = async (id: any) => {
    const response = await axios.get(`${API_BASE_URL}/items/${id}`);
    return response.data;
};

// Backwards-compatible aliases used by some components
export const fetchData = fetchItems;
export const submitItem = createItem;