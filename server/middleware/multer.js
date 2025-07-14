import multer from "multer";

// to parse the image from frontend

const upload = multer({storage: multer.diskStorage({})})

export default upload;