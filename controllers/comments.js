var express = require('express');
var router = express.Router();
var Comment = require(__dirname + '/models/comment');

router.get('/:id', function(request, response) {
    Comment.get(request.params.id, function (error, comment) {
        response.render('comments/comment', {comment: comment});
    });
});

module.exports = router;
