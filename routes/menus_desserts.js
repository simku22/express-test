import express from 'express';
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is the desserts menu');
})

router.get('/1', function(req, res, next) {
    res.send('This is dessert #1');
})

router.get('/2', function(req, res, next) {
    try {
        throw(new Error("failed to load dessert 2"));
        res.send("This is dessert #2");
    } catch(err) {
        console.log(err);
        res.status(500).send("error");
    }

})


export default router;
