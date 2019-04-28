import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const LocationSchema = new Schema({
  formattedAddress: {
    type: String
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
});

export default model('Location', LocationSchema);
