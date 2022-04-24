import { readFileSync } from 'fs';
import { join } from 'path';
import connection from './connection';

const dbBuild = async () => {
  const build = readFileSync(join(__dirname, 'build.sql')).toString();
  const fakaData = readFileSync(join(__dirname, 'fakedata.sql')).toString();
  try {
    await connection.query(build + fakaData);
  } catch (error) {
    console.log(error);
  }
};

export default dbBuild;
