const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024000 },
  fileFilter: (req, file, cb) => {
    checkFile(file, cb)
  }
}).single('image')

function checkFile(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimes = fileTypes.test(file.mimetype)
  if (mimes && extname) {
    return cb(null, true)
  } else {
    cb("Error: Images Only!")
  }
}

module.exports = { upload }
