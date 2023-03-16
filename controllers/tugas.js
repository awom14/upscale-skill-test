const Tugas = require('../models/tugas');
const controller = {};

controller.getAllTugas = async (req, res) => {
	try {
		const result = await Tugas.findAll();

		res.status(200).json({result: result});
	} catch (err) {
		res.status(500).json({error: err.message});
	}
};

controller.getTugasById = async (req, res) => {
	try {
		const result = await Tugas.findOne({where: {id: req.params.id}});

		if (!result) {
			return res.status(500).json({error: `Tugas with that ID cannot be found.`});
		} else {
			return res.status(200).json({result: result});
		}
	} catch (err) {
		res.status(500).json({error: err.message});
	}
};

controller.postTugas = async (req, res) => {
	if (!req.body.judul) {
		return res.status(500).json({error: `Judul is mandatory.`});
	}

	try {
		const result = await Tugas.create({judul: req.body.judul, deskripsi: req.body.deskripsi, selesai: req.body.selesai});

		res.status(200).json({result: result});
	} catch (err) {
		res.status(500).json({error: err.message});
	}
};

controller.updateTugasById = async (req, res) => {
	let update;
	let result;
	try {
		const getTugas = await Tugas.findOne({where: {id: req.params.id}});

		if (getTugas) {
			update = await Tugas.update({judul: req.body.judul, deskripsi: req.body.deskripsi, selesai: req.body.selesai}, {where: {id: req.params.id}});
		} else {
			return res.status(500).json({error: `Tugas with that ID cannot be found.`});
		}

		if (update[0] === 1) {
			result = await Tugas.findOne({where: {id: req.params.id}});

			return res.status(200).json({status: `Tugas has been updated successfully.`, result: result});
		} else if (update[0] === 0) {
			result = await Tugas.findOne({where: {id: req.params.id}});

			return res.status(200).json({status: `Tugas data has not been updated.`, result: result});
		}
	} catch (err) {
		res.status(500).json({error: err.message});
	}
};

controller.deleteTugasById = async (req, res) => {
	let deleteTugas;
	try {
		const result = await Tugas.findOne({where: {id: req.params.id}});

		if (result) {
			deleteTugas = await Tugas.destroy({where: {id: req.params.id}});
		} else {
			return res.status(500).json({error: `Tugas with that ID cannot be found.`});
		}

		if (deleteTugas === 1) {
			return res.status(200).json({result: `Tugas has been deleted successfully.`});
		} else {
			return res.status(500).json({error: `Tugas cannot be deleted.`})
		}
	} catch (err) {
		res.status(500).json({error: err.message});
	}
};

module.exports = controller;