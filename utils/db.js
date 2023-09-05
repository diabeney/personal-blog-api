import { connect } from "mongoose";

export default async function ConnectDB(uri) {
  await connect(uri)
    .then(() => {
      console.log("Database connected!");
    })
    .catch((err) => console.error({ message: err.message }));
}
