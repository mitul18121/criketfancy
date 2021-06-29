import mongoose from "mongoose";

const ConnectMongo = async () => {
  const Connection = await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  if (!Connection) {
    console.log("unable to connect database !");
  } else {
    console.log("Connected to MongoDB Cloud Successfully !");
  }
};

export default ConnectMongo;
