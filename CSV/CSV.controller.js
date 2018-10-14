const csv = require('csvtojson');
const CSV = require('./CSV.model');
const User = require('./user.model');
const csvexpress = require('csv-express')
exports.save_file = (req, res, next) => {
    const csvFilePath = './' + req.file.path;
    const new_csv = new CSV({
        path: csvFilePath
    });
    new_csv.save()
        .then(result => {
            csv()
                .fromFile(csvFilePath)
                .then((jsonObj)=>{
                    jsonObj.forEach((element) => {
 
                        const new_user = new User({
                            Username: element.Username,
                            FirstName: element.FirstName,
                            LastName: element.LastName,
                            Age: Number(element.Age)
                        });
                        new_user.save();
                        
                    })

                    res.status(200).json({
                        message: 'ok'
                    });
                })
                .catch(err => {
                    return res.status(500).json({
                        error: err
                    })
                })
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            })
        })
}

exports.users_in_file = (req, res, next) => {
    User.find({}, {_id: 0, __v: 0}).lean().exec()
        .then(data => {
            res.csv(data, true, {
                'Content-disposition': 'attachment; filename=users.csv'
            })
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            })
        })
}