import mongoose, { Schema } from 'mongoose';

const brandSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const BrandModel = mongoose.model('brands', brandSchema);

export default BrandModel;
