import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Should return true', () => {
  it('should pass this test', () => {
    expect(true).to.be.eql(true);
  });
});
