import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Alredy Connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "nextRestAPI",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err: any) {
    console.log("Error : ", err);

    throw new Error(`MongoDB Connection Error: ${err.message}`);
  }
};

export default connect;
