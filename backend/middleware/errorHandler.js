import createError from 'http-errors';

export const routeNotFound = () => {
	throw createError(404, 'Route not found');
};

export const errorHandler = (err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		statusCode: err.status,
		message: err.message,
		stack: err.stack,
	});
};
