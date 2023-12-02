import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    const db = await connect(process.env.URL);
    console.log('DB connected to:', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
