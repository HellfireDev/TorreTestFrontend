
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3010';

export const apiEndpoints = {
    register: baseUrl + '/register',
    login: baseUrl + '/signin',
    home: baseUrl + '/home',
    profile: baseUrl + '/profile',
    combo: baseUrl + '/combo'
}