const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.delete);

module.exports = router;