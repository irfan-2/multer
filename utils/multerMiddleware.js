import multer from "multer"
import path from "path"

// disk storage(local storage)
// memory storage (RAM)

// user uploads a file -> your server receiver it 
// 1. store it locally (VPS/ laptop)
// 2. store it in RAM temporarily then send it to cloud/ desired destination

// in disk storage and memory storage
// accept single file
// accept multiple files (array)

const allowedExtensions = [".png", ".jpg", ".jpeg", ".webp"]
const allowedMineType = ["image/png", "image/jpg", "image/jpeg", "image/webp"]

const uploadSimple = multer({dest: "/home/irfan/multer/uploads"})

// storage, file filter, limits

const uploadWithFeatures = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req,file,cb) =>{
        const ext = path.extname(file.originalname).toLowerCase()
        const mine = file.mimetype

        if(!allowedExtensions.includes(ext) || !allowedMineType.includes(mine)){
            return cb(new Error("only PNG, JPEG, JPG, WERP files are allowed"))
        }
        cb(null, true)

    },
    limits: {fileSize: 2 * 1024 * 1024} // 2MB
})

export {uploadSimple, uploadWithFeatures}