import mongoose, { Schema } from 'mongoose';

const carSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  modelId: {
    type: String,
    require: true,
  },
  registration: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  mileage: {
    type: Number,
    require: true,
  },
  doors: {
    type: Number,
    require: false,
  },
  seats: {
    type: Number,
    require: false,
  },
  battery: {
    type: Number,
    require: true,
  },
  power: {
    type: Number,
    require: false,
  },
  equipment: {
    type: Array,
    require: false,
  },
  exteriorColor: {
    type: String,
    require: false,
  },
  interiorColor: {
    type: String,
    require: false,
  },
  upholstery: {
    type: String,
    require: false,
  },
  photo1: {
    type: String,
    require: true,
  },
  photo2: {
    type: String,
    require: false,
  },
  photo3: {
    type: String,
    require: false,
  },
  photo4: {
    type: String,
    require: false,
  },
  photo5: {
    type: String,
    require: false,
  },
});

const CarModel = mongoose.model('cars', carSchema);

export default CarModel;
