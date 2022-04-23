/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import {
  afterAll, beforeAll, describe, test,
} from '@jest/globals';

import app from '../src/app';
import connection from '../src/database/config/connection';
import dbBuild from '../src/database/config/build';

beforeAll(() => dbBuild());

describe('testing profile routes', () => {
  test(' test get api/v1/profile should return a 401 status code if there is no token', (done) => {
    request(app)
      .get('/api/v1/profile')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});

afterAll(() => connection.end());
