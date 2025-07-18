import jwt from "jsonwebtoken"
import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }
        
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.json({ success: true, token });
        
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getAllBlogsAdmin = async(req,res)=>{
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1})
        res.json({success:true, blogs})
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getAllcomments = async(req,res)=>{
    try{
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
        res.json({success:true, comments})
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const getDashboard = async (req, res) => {
    try {
        const recentBlogs = await Blog.find({})
            .sort({ createdAt: -1 })
            .limit(5);
            
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({ isPublished: false });

        const dashboardData = {
            blogs,
            comments,
            drafts,
            recentBlogs
        };

        res.status(200).json({
            success: true,
            dashboardData
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}; 


// Delete Comment Endpoint
export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Comment ID is required"
            });
        }

        const deletedComment = await Comment.findByIdAndDelete(id);
        
        if (!deletedComment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Comment deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Approve Comment Endpoint
export const approveCommentById = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Comment ID is required"
            });
        }

        await Comment.findByIdAndUpdate(id, {isApproved:true})

        res.status(200).json({
            success: true,
            message: "Comment approved successfully!"
            
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};