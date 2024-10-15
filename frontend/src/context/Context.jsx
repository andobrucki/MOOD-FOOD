/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from 'react';
import { moodInitialState, moodReducer } from '../reducers/moodReducer';
import { userInitialState, userReducer } from '../reducers/userReducer';

// import { getMyData } from '../api/usersApi';
import { setAxiosDefaults } from '../utils/axiosConfig';

//! Context Component
// Set up context to manage the mood state across the application

// Create Context
export const DataContext = createContext();

// Provider Component
export const DataProvider = ({ children }) => {
	const [moodState, moodDispatch] = useReducer(moodReducer, moodInitialState);
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);

	// const { user, isUserLoggedIn } = userState;

	useEffect(() => {
		setAxiosDefaults();
		// getMyData(userDispatch);
	}, []);

	return (
		<DataContext.Provider
			value={{ userState, userDispatch, moodState, moodDispatch }}
		>
			{children}
		</DataContext.Provider>
	);
};
