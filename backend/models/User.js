import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
	},

	// Ref to Mood
});

// Pre-save middleware to hash password
userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 12);
	}
	next();
});

// Instance method to compare entered password with stored hash
userSchema.methods.isPasswordCorrect = async function (
	inputPassword,
	storedPassword
) {
	return await bcrypt.compare(inputPassword, storedPassword);
};

export default model('User', userSchema);
