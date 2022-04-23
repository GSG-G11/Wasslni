/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import {
  afterAll, beforeAll, test,
} from '@jest/globals';
import app from '../src/app';
import connection from '../src/database/config/connection';
import dbBuild from '../src/database/config/build';

beforeAll(() => dbBuild());
test('', (done) => {
  request(app)
    .get('/api/v1')
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
afterAll(() => connection.end());
