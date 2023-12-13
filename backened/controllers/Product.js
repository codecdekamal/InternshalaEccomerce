const Products = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const path = require("path");
const createProduct = async (req, res) => {
  try {
    req.body.user = req.user.userID;
    const product = await Products.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ product });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};
const getAllProducts = async (req, res) => {
  const products = await Products.find({});
  res.status(StatusCodes.OK).json({ products });
  console.log("getAllProducts");
};
const getSingleProduct = async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "No Product is found with this id" });
  }
  res.status(StatusCodes.OK).json({ product });
};
const updateProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
          return res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: "No Product is found with this id" });
        }
        const updateProduct = await Products.findOneAndUpdate(
          {_id:req.params.id},
          {...req.body}
        );
        res.status(StatusCodes.OK).json({ updateProduct }); 
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg:error.message }); 
    }
  
};
const deleteProduct = async (req, res) => {
      try {
        const product = await Products.findById(req.params.id);
        if (!product) {
          return res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: "No Product is found with this id" });
        }
         await Products.findOneAndDelete({_id:req.params.id},);
        res.status(StatusCodes.OK).json({ msg:"Success" }); 
      } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg:error.message }); 

      }
};
const uploadImage = async (req, res) => {
    if(!req.files){
       return res.status(StatusCodes.BAD_REQUEST).json({msg:"No file is uploaded."})
    }
    const productImage = req.files.img
    if(!productImage.mimetype.startsWith('image')){
     return res.status(StatusCodes.BAD_REQUEST).json({msg:"No file is uploaded."})
    }
    const maxSize = 1024*1024
    if(productImage.size >maxSize){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Please provide image of size lesser than 1 mb."})
    }
    const imagePath = path.join(__dirname,"../public/uploads/"+productImage.name )
    productImage.mv(imagePath,function(err){
      if(err){
        return res.status(500).json({msg:err});
    }
    res.status(StatusCodes.OK).json({msg:"success"})
    })

   console.log(req.files.img)
};
module.exports = {
  createProduct,
  uploadImage,
  deleteProduct,
  updateProduct,
  getSingleProduct,
  getAllProducts,
};
