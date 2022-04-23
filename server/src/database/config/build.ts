import { readFileSync } from 'fs';
import { join } from 'path';
import connection from './connection';

const dbBuild = async () => {
  const build = readFileSync(join(__dirname, 'build.sql')).toString();
  try {
    await connection.query(build);
  } catch (error) {
    console.log(error, 'error in DB');
  }
};

export default dbBuild;
