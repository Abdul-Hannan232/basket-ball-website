const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload'); // Specify the folder to save the uploaded files
    },
    filename: (req, file, cb) => {
        // Create a unique file name
        const uniqueName = `${Date.now()}-${file.originalname.replace(/\s/g, '')}`;
        cb(null, uniqueName);
    },
});

// File type filter (optional, if you want to allow specific file types like images only)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPEG and PNG are allowed."));
    }
};

// Limits the file size to 5MB
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

module.exports = upload;
