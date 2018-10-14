const express = require('express');
const router = express.Router();
const CSVController = require('./CSV.controller');
const multer = require('multer');
const userController = require('./user.controller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
})
const upload = multer({storage: storage});

router.post('/save_file', upload.single('file'), CSVController.save_file);
router.get('/users_in_file', CSVController.users_in_file);

router.get('/get_users', userController.getUsers);



module.exports = router;