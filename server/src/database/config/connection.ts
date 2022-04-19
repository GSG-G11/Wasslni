import { Pool } from 'pg';

// import ('env2')('.env');
import * as dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let dburl = '';

switch (NODE_ENV) {
  case 'production':
    dburl = DATABASE_URL;
    break;
  case 'development':
    dburl = DEV_DB_URL;
    break;
  case 'test':
    dburl = TEST_DB_URL;
    break;
  default:
    throw new Error('DB URL does not exists');
}

const option = {
  connectionString: dburl,
  ssl: false,
};

const connection = new Pool(option);

export default connection;
