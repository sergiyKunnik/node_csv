const User = require('./user.model');

exports.getUsers = (req, res, next) => {
    User.find({}).exec()
        .then(data => {
            return res.status(200).json({
                'users': data,
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}