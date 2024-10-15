import axios from 'axios';

axios.defaults.withCredentials = true;

export const signup = async (userDispatch, formData) => {
	try {
		const response = await axios.post('/users/signup', formData, {
			withCredentials: true,
		});
		console.log(formData);
		userDispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
		return { success: true };
	} catch (error) {
		console.log('Error during singup:', error);
		console.log(formData);
		return { success: false, error };
	}
};

// export const login = async (userDispatch, formData) => {
// 	try {
// 		const response = await axios.post('/users/login', formData, {
// 			withCredentials: true,
// 		});

// 		userDispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const logout = async (userDispatch) => {
// 	try {
// 		await axios.get('/users/logout', {
// 			withCredentials: true,
// 		});
// 		userDispatch({ type: 'LOGOUT' });
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const getMyData = async (userDispatch) => {
// 	try {
// 		const response = await axios.get('/users/me', {
// 			withCredentials: true,
// 		});

// 		if (response.data && response.data.isAuthenticated) {
// 			userDispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
