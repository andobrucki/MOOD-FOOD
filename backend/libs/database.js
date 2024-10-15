import mongoose from 'mongoose';

export default function connectDB() {
	mongoose.connection.on('connected', () => {
		console.log(
			`Successfully connected to the database: ${mongoose.connection.name}`
		);
	});

	mongoose.connection.on('error', (err) => {
		console.log(`Error connecting to the database: ${err}`);
	});

	mongoose.connect(process.env.MONGODB_URI);
}
