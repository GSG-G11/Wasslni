/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import {
  afterAll, beforeAll, test, describe,
} from '@jest/globals';
import app from '../src/app';
import connection from '../src/database/config/connection';
import dbBuild from '../src/database/config/build';

beforeAll(() => dbBuild());

describe('check route "api/v1/parcels" ', () => {
  test('should return 401 when user Unauthorized', (done) => {
    request(app)
      .get('/api/v1/parcels')
      .expect(401)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll(() => connection.end());
