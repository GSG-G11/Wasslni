import {
  afterAll, beforeAll, expect, test,
} from '@jest/globals';
import connection from '../src/database/config/connection';
import dbBuild from '../src/database/config/build';

beforeAll(() => dbBuild());

test('', () => {
  expect(1).toBe(1);
});
afterAll(() => connection.end());
