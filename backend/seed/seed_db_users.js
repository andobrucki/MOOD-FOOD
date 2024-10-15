import mongoose from 'mongoose';
import data from './users.js';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
	try {
		console.log(process.env.MONGODB_URI);
		await mongoose.connect(process.env.MONGODB_URI);
		const users = data.map((user) => new User(user));

		await User.deleteMany();
		console.log('Data Deleted successfully');

		await User.insertMany(users);
		console.log('Data Seeded successfully');
	} catch (error) {
		console.log(`Error While seeding data: ${error}`);
	} finally {
		mongoose.connection.close();
		console.log('Connection to the datebase was closed');
	}
})();
