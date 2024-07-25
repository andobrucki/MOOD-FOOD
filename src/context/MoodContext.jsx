import { createContext, useReducer } from 'react';

//! MoodContext Component
// Set up context to manage the mood state across the application

// Create Context
const MoodContext = createContext();

// Initial State
const initialState = {
	mood: '', // Stores the user's current mood
	moods: {
		happy: '#fde047',
		relaxed: '#a7f3d0',
		fearful: '#064e3b',
		astonished: '#7e22ce',
		sad: '#1e3a8a',
		frustrated: '#1a2e05',
		angry: '#ef4444',
		excited: '#fb923c',
	}, // Stores the colors associated with each mood
	timeOfDay: '', // Stores the current time of day (morning, afternoon, or evening)
	nextStep: '',
	videoId: '', // Stores the video ID for the music player
};

// Reducer Function
const moodReducer = (state, action) => {
	switch (action.type) {
		case 'SET_MOOD':
			return {
				...state,
				mood: action.payload,
			};
		case 'SET_TIME_OF_DAY':
			return { ...state, timeOfDay: action.payload }; // Set the time of day
		case 'SET_NEXT_STEP':
			return { ...state, nextStep: action.payload }; // Set the next step
		case 'SET_VIDEO_ID':
			return { ...state, videoId: action.payload }; // Set the video ID
		default:
			return state;
	}
};

// Provider Component
const MoodProvider = ({ children }) => {
	const [state, dispatch] = useReducer(moodReducer, initialState);

	return (
		<MoodContext.Provider value={{ state, dispatch }}>
			{children}
		</MoodContext.Provider>
	);
};

export { MoodProvider, MoodContext };
