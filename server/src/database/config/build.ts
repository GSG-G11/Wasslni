import { readFileSync } from 'fs';
import { join } from 'path';
import connection from './connection';

const dbBuild = () => {
  const build = readFileSync(join(__dirname, 'build.sql')).toString();
  const fake = readFileSync(join(__dirname, 'fakedata.sql')).toString();

  return connection.query(build) + connection.query(fake);
};

export default dbBuild;
