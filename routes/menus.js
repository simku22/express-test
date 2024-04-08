import express from 'express';
import menuDessertsRouter from './menus_desserts.js';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the menu');
});

router.use('/desserts', menuDessertsRouter);

export default router;
