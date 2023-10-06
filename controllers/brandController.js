const BrandName = require('../models/brandModel');

const createBrand =  async (req,res)=>{
    const {brandname} = req.body;
    try {
      const newData = new BrandName({brandname});
      await newData.save();
      return res.json(await BrandName.find())
    } catch(err){
      console.log(err);
    }
  }

  const getAllBrands =  async(req,res)=> {
    try {
      const getData = await BrandName.find();
      return res.json(getData);
    }catch(err){
      console.log(err.message);
    }
  }

const getAllBrandsById = async(req,res)=> {
    try {
      const data = await BrandName.findById(req.params.id)
      return res.json(data);
    }catch(err){
      console.log(err.message);
    }
  }

const deleteBrand =  async(req,res)=> {
    try {
      await BrandName.findByIdAndDelete(req.params.id)
      return res.json(await BrandName.find());
    }catch(err){
      console.log(err.message);
    }
  }

const updateBrand = async (req, res) => {
    const { id } = req.params; // Extract brand ID from URL
    const { brandname } = req.body;
  
    try {
      const updatedBrand = await BrandName.findByIdAndUpdate(id, { brandname }, { new: true });
  
      if (!updatedBrand) {
        return res.status(404).json({ message: 'Brand not found' });
      }
  
      const allBrands = await BrandName.find();
      return res.json(allBrands);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  module.exports = {
    createBrand,
    getAllBrands,
    getAllBrandsById,
    deleteBrand,
    updateBrand,
  };