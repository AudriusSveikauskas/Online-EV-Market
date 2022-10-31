import mongoose, { Schema } from 'mongoose';

const modelSchema = new Schema({
  brandId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

const ModelModel = mongoose.model('models', modelSchema);

export default ModelModel;
