import api from './api';
import { jwtDecode } from 'jwt-decode'; 

export const login = async (username, password) => {
    const response = await api.post('/token/', { username, password });
    const { access, refresh } = response.data;

    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);

    api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
    
    return jwtDecode(access);
};

export const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    delete api.defaults.headers.common['Authorization'];
};

export const getNewAccessToken = async () => {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) throw new Error('No refresh token available');

    const response = await api.post('/token/refresh/', { refresh });
    const { access } = response.data;

    localStorage.setItem('access', access);
    api.defaults.headers.common['Authorization'] = `Bearer ${access}`;

    return jwtDecode(access);
};

export const isAuthenticated = () => {
    const access = localStorage.getItem('access');
    if (!access) return false;

    const { exp } = jwtDecode(access);
    return Date.now() < exp * 1000;
};
