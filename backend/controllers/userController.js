import createError from 'http-errors';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { createSendToken } from '../libs/jwt.js';

export const signup = async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		createSendToken(res, 201, user);
	} catch (error) {
		next(error);
	}
};

export const login = async (req, res, next) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			throw createError(400, 'Please provide username and password');
		}

		const user = await User.findOne({ username });

		if (!user || !(await user.isPasswordCorrect(password, user.password))) {
			throw createError(401, 'Invalid credentials');
		}
		createSendToken(res, 200, user);
	} catch (error) {
		next(error);
	}
};

export const logout = async (req, res, next) => {
	try {
		res.clearCookie('jwtToken', {
			httpOnly: true,
			sameSite: 'none',
			secure: true,
		});

		res.status(200).json({
			success: true,
			status: 200,
			data: 'User was successfully logged out.',
		});
	} catch (error) {
		next(error);
	}
};
