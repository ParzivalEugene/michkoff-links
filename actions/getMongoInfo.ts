"use server";

import { mongoModel } from "@/actions/models/mongoModel";
import { env } from "@/env";
import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(env.MONGO_URI);
  return mongoose.connection.readyState;
}

async function disconnect() {
  await mongoose.disconnect();
  return mongoose.connection.readyState;
}

export async function getMongoInfo() {
  await connect();
  const res = await mongoModel.findOne();
  return res;
}

export async function getSpotifyLink() {
  await connect();
  const res = await mongoModel.findOne();
  return res?.spotify.link;
}
