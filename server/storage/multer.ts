import multer from "multer"

// setup multer location of the storage for files, and name
const profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "dist/public/assets")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
const product = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "dist/public/assets/product")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
// setup the middleware
export const uploadProfilePictures = multer({ storage: profileStorage })
export const uploadProductPictures = multer({ storage: product })
