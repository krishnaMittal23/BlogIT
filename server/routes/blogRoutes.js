import express from 'express'
import { addBlog, deleteBlogById, getAllblogs, getBlogById, togglePublish } from '../controllers/blogController.js'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'

const blogRouter = express.Router()

blogRouter.post("/add",upload.single('image') , auth ,addBlog)
blogRouter.get("/all", getAllblogs)
blogRouter.get("/:blogId", getBlogById)
blogRouter.post("/delete", auth, deleteBlogById)
blogRouter.post("/toggle-publish", auth, togglePublish)


// it will parse the image and attach it to req.file

export default blogRouter;