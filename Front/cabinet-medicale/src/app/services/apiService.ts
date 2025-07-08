
// Gestion de session locale avec localStorage
export function setSession(key: string, value: any) {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export function getSession(key: string) {
    if (typeof window !== "undefined") {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    return null;
}
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export async function getData(endpoint: string) {
    const url = `${BASE_URL}${endpoint}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        } else {
            throw error;
        }
    }
}


export async function postData(endpoint: string, body: object) {
    const url = `${BASE_URL}${endpoint}`;
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            console.log(error);
            
            throw error.response.data;
        } else {
            console.log(error);
            
            throw error;
        }
    }
}

export async function putData(endpoint: string, body: object, config = {}) {
    const url = `${BASE_URL}${endpoint}`;
    try {
        const response = await axios.put(url, body, config);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        } else {
            throw error;
        }
    }
}

export async function deleteData(endpoint: string, config = {}) {
    const url = `${BASE_URL}${endpoint}`;
    try {
        const response = await axios.delete(url, config);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        } else {
            throw error;
        }
    }
}
