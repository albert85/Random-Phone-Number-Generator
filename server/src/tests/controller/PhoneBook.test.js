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


});
