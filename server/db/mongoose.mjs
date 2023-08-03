import { connect } from 'mongoose';
const connectionString = process.env.ATLAS_URI || "";


conn().catch(err => console.log(err));

export default async function conn() {
  await connect(connectionString);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}