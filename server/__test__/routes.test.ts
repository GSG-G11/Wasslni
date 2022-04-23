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

describe('check route "api/v1/login', () => {
  test('should return 201 when we have a successfully user', (done) => {
    request(app)
      .post('/api/v1/login')
      .send({ phoneNumber: '+970595421545', password: 123456 })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done();
        return done(err);
      });
  });
});

afterAll(() => connection.end());
