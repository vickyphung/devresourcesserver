const express = require('express');
const router = express.Router();
const bookmark = require('../models/Bookmark');



// router.get('/', (req, res) => {
//     res.status(200).json({
//     message: "bookmark index"
//     });
// }
// );

router.post("/add", (req, res) =>{
    const bookmarkData = req.body
    bookmark.create(bookmarkData, (error, createdBookmark) =>{
        if (error){
            console.error(error);
            res.status(400).json({
                error: "Error occured. Bookmark not created."
            })
        } else {
            console.log("Bookmark created successfully.");
            res.status(200).json({
                message: "Bookmark was successfully created.",
                bookmark: createdBookmark
            })
        }
    })
  })

  router.get("/", (req, res)=>{
    bookmark.find()
    .sort('site')
    .exec
    ((err, allBookmarks)=>{
        if(err){
            res.status(404).json({
                message: "Error. No bookmarks found."
            })
        } else {
            res.status(200).json({
            bookmarksList: allBookmarks})
        }
    })
})
  
router.get("/category/:category", (req, res)=>{
    const category = req.params.category
    bookmark.find()
    .where('category').equals(category)  
    .sort('site')
    .exec
    ((err, bookmark)=>{
        if(err){
            res.status(404).json({message: "Could not find bookmarks with that category."})
        } else {
            res.status(200).json({message: "bookiemarkies",
            bookmarks: bookmark})
        }
    })
})
// router.get("/category/:category", (req, res)=>{
//     const category = req.params.category

//     bookmark.find()
//     .where('category').equals(category)
//     .sort('site')
//     .exec
//     ((err, allBookmarks)=>{
//         if(err){
//             res.status(404).json({message: "Error. No bookmark data found."})
//         } else {
//             res.status(200).json({message: " JS bookmarkies",
//             bookmarksList: allBookmarks})
//         }
//     })
// })
  module.exports = router;