const { Schema, model } = mongoose;
import mongoose from "mongoose";

const mongoSchema = new Schema({
  spotify: {
    link: String,
  },
});

export const mongoModel = mongoose.models.Links || model("Links", mongoSchema);
