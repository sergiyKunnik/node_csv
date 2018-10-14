const mongoose = require('mongoose');
const mongoose_csv = require('mongoose-csv');
const CSVSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    path: {
        type: String,
        require: true,
    },
});
CSVSchema.plugin(mongoose_csv);
module.exports = mongoose.model('CSV', CSVSchema);
  