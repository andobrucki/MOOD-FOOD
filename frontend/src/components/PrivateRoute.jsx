import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../context/Context';

// PrivateRoute component to protect certain routes
const PrivateRoute = ({ children }) => {
	const { userState } = useContext(DataContext);

	// If user is not logged in, redirect to signup page
	if (!userState.isUserLoggedIn) {
		return <Navigate to="/signup" replace />;
	}

	// If authenticated, render the child components
	return <>{children}</>;
};

export default PrivateRoute;
