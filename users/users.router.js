const {getAll,getById,create,remove,edit} = require('./users.services');

const router = require('express').Router();

router.get('/users',getAll)
router.post('/users',create)

router.get('/users/:id',getById)
router.put('/users/:id',edit)
router.delete('/users/:id',remove)

module.exports = router;
