import mongoose, { Schema } from 'mongoose';

const equipmentSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const equipmentModel = mongoose.model('equipment', equipmentSchema);

export default equipmentModel;
