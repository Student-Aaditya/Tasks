const upload=require("../Services/cloudinary.js");


const imageController={
     uploadImage: async (req, res) => {
      res.json({ url: req.file.path });

        }
}

module.exports=imageController;