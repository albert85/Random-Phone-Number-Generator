import request from 'supertest';

import app from 'src/index';
import { clearFile } from 'helper/util'

describe('PhoneBook Controller', () => {

  beforeAll((done) => {
    clearFile();
    done()
  })

  it('should generate random phone numbers', (done) => {

    request(app)
      .get('/api/v1/phone-numbers?sort=ascr&limit=50')
      .expect(201)
      .end((err, res) => {
        if(err) throw err
        expect(res.body).toHaveProperty('message', 'Telephone successfully generated');
        expect(res.body.data).toHaveLength(50);
        done();
      });
  })
  it('should get all list of phone numbers in the database arranged in ascending order', (done) => {

    request(app)
      .get('/api/v1/phone-numbers-list?sort=ascr')
      .expect(200)
      .end((err, res) => {
        if(err) throw err
        expect(res.body).toHaveProperty('message', 'All telephone numbers successfully retrieved');
        expect(res.body.data).toHaveLength(50);
        expect(parseInt(res.body.data[0])).toBeLessThan(parseInt(res.body.data[49]));
        done();
      });
  })
  it('should get all list of phone numbers in the database arranged in descending order', (done) => {

    request(app)
      .get('/api/v1/phone-numbers-list?sort=descr')
      .expect(200)
      .end((err, res) => {
        if(err) throw err
        expect(res.body).toHaveProperty('message', 'All telephone numbers successfully retrieved');
        expect(res.body.data).toHaveLength(50);
        expect(parseInt(res.body.data[0])).toBeGreaterThan(parseInt(res.body.data[49]));
        done();
      });
  })
  
  it('should return error when generating with invalid limit value', (done) => {

    request(app)
      .get('/api/v1/phone-numbers')
      .expect(422)
      .end((err, res) => {
        if(err) throw err
        expect(res.body).toHaveProperty('message', 'Failed to generate Telephone');
        expect(res.body.errors).toHaveLength(1);
        done();
      });
  })

});
