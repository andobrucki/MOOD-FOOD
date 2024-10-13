import axios from 'axios';

// export const setAxiosDefaults = () => {
// 	axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// 	axios.defaults.withCredentials = true;
// };

export const setAxiosDefaults = () => {
	const apiUrl = import.meta.env.VITE_API_URL;
	console.log('API URL:', apiUrl); // Check the value in the console
	axios.defaults.baseURL = apiUrl;
	axios.defaults.withCredentials = false;
};
