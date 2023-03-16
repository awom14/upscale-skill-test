const Sequelize = require('sequelize');

const sequelize = new Sequelize('upscale', 'awom', 'password', {
	host: '127.0.0.1',
	dialect: 'mariadb',
	logging: false,
	define: {
		timestamps: false
	}
});

module.exports = sequelize;