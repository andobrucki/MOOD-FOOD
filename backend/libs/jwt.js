import jwt from 'jsonwebtoken';

export const createSendToken = (res, status, user) => {
	const { JWT_EXPIRES_IN, JWT_SECRET, COOKIE_EXPIRES_IN, NODE_ENV } =
		process.env;

	//! Sign jwt token
	const jwtToken = jwt.sign({ id: user._id }, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN,
	});

	//! Set cookie option
	const isProduction = NODE_ENV === 'production';

	const cookieOptions = {
		expires: new Date(Date.now() + COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
		httpOnly: true, // Prevents client side js from accessing the cookie
		secure: isProduction, // Cookie will only be sent on secure connections
		sameSite: isProduction ? 'None' : 'Lax', // Cross site cookie
	};

	//! Send token using cookie
	res.cookie('jwtToken', jwtToken, cookieOptions);

	user.password = undefined;

	res.status(status).json({ success: true, status, user });
};
