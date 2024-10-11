# Why Use cookie-parser?

If your authentication system uses cookies to store user sessions or tokens (like JWT or session IDs), cookie-parser makes it easier to access the cookies in your request handlers. It parses the Cookie header and populates req.cookies with an object containing all cookie data.

For example, after adding cookie-parser, you can access cookies in any route

```js
app.get('/protected', (req, res) => {
	const token = req.cookies['token']; // Access the token stored in cookies
	if (!token) {
		return res.status(401).send('Unauthorized');
	}

	// Proceed with token validation or other authentication steps...
});
```

# Hashing password

- write functions inside schema:
  // Pre-save middleware to hash password

```js
userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 12);
	}
	next();
});
```

// Instance method to compare entered password with stored hash

```js
userSchema.methods.isPasswordCorrect = async function (
	inputPassword,
	storedPassword
) {
	return await bcrypt.compare(inputPassword, storedPassword);
};
```
