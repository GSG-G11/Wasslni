/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import dotenv from 'dotenv';
import {
  afterAll, beforeAll, describe, test,
} from '@jest/globals';

import app from '../src/app';
import connection from '../src/database/config/connection';
import dbBuild from '../src/database/config/build';

dotenv.config();
beforeAll(() => dbBuild());

describe('check route "api/v1/sms"  ', () => {
  test('should return 200 when twilio send a message to the owner of the phoneNumber  ', (done) => {
    request(app)
      .post('/api/v1/sms')
      .send({
        phoneNumber: '+972567359920',
      })
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
test('should return 400 ( Bad request ) When the user enters a number less than and more than 13 digits ', (done) => {
  request(app)
    .post('/api/v1/sms')
    .send({
      phoneNumber: '+97256735992',
    })
    .expect(400)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
test('should return 400 ( Bad request ) When user sends unexpected data type ', (done) => {
  request(app)
    .post('/api/v1/sms')
    .send({
      phoneNumber: 4,
    })
    .expect(400)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

describe('testing profile routes', () => {
  test(' test get api/v1/profile should return a 401 status code if there is no token', (done) => {
    request(app)
      .get('/api/v1/profile')
      .expect(401)
      .expect('Content-Type', /json/)
      // eslint-disable-next-line consistent-return
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  test(' test get api/v1/profile should return a 200 status code if there is a token', (done) => {
    request(app)
      .get('/api/v1/profile')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(200)
      .expect('Content-Type', /json/)
      // eslint-disable-next-line consistent-return
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
      .send({ phoneNumber: '+970595421545', password: '123456' })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

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
  test('should return 200 when there is a token', (done) => {
    request(app)
      .get('/api/v1/parcels')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll(() => connection.end());
