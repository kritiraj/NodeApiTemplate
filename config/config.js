let config = {
	MONGO: {
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/template')
	},
	JWT: {
		SECRET_KEY:'supersecret'
	}
}

module.exports = config;
