
// Create new comment in your database and return its id
exports.create = function(user, text, callback) {
    callback('12345');
};

// Get a particular comment
exports.get = function(id, callback) {
    callback(null, {id:id, text: 'Very nice example'});
};

// Get all comments
exports.all = function(callback) {
    callback(null, []);
};

// Get all comments by a particular user
exports.allByUser = function(user, callback) {
    callback(null, []);
};
