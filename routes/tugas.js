const express = require('express');
const router = express.Router();
const controller = require('../controllers/tugas');

router.get('/tugas', controller.getAllTugas);
router.get('/tugas/:id', controller.getTugasById);
router.post('/tugas', controller.postTugas);
router.patch('/tugas/:id', controller.updateTugasById);
router.delete('/tugas/:id', controller.deleteTugasById);

module.exports = router;