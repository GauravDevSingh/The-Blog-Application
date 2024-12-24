const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controllers/blogController");

//routes object
const router = express.Router();

//routes
//Get || all blogs
router.get("/all-blog", getAllBlogsController);

//Post || create blog
router.post("/create-blog", createBlogController);

//PUt \\ update blog
router.put("/update-blog/:id", updateBlogController);

//get \\ single blog details
router.get("/get-blog/:id", getBlogByIdController);

//Delete \\ delete blog
router.delete
("/delete-blog/:id", deleteBlogController);

//Get || user blog
router.get('/user-blog/:id',userBlogControlller)
module.exports = router;
