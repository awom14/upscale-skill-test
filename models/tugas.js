const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Tugas = sequelize.define('tugas', {
	id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true
	},
	judul: {
		type: Sequelize.STRING(100),
		allowNull: false
	},
	deskripsi: {
		type: Sequelize.STRING(255),
		allowNull: true
	},
	selesai: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
});

module.exports = Tugas;