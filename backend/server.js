import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './libs/database.js';
import userRouter from './routes/userRouter.js';
import { routeNotFound, errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

await connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for enabling CORS
app.use(
	cors({
		origin: process.env.EXPRESS_CLIENT_URL,
		credentials: true,
	})
);
// Middleware for parsing JSON data
app.use(express.json());
// Middleware for cookie parsing
app.use(cookieParser());

// Routes for users
app.use('/users', userRouter);

// Error handling middleware
app.use(routeNotFound);
app.use(errorHandler);


// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
