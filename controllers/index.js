var express = require('express');
var router = express.Router();

router.use('/comments', require('./comments'));
router.use('/users', require('./users'));

router.get('/', function(request, response) {
    response.render('index');
});

module.exports = router;
