import { readFileSync } from 'fs';
import { join } from 'path';
import connection from './connection';

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql);
};

export default dbBuild;
