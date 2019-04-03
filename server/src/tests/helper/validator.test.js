import { checkLimit, checkSort } from 'helper/validator'
import { arrElement } from '../mockData'

describe('Validator Helper', () => {
    let mockData = [1,2,3,4,5]

  it('should validate limit param function', () => {
      expect(checkLimit(10)).toBe(10)
  });

  it('should validate limit param function if greater than 50', () => {
      expect(checkLimit(100)).toBe(50)
  });

  it('should validate valid sort param function ascending order', () => {
      expect(checkSort('ascr', arrElement)).toEqual([1,2,3,4,5])
  });

  it('should validate valid sort param function ascending order', () => {
      expect(checkSort('descr', arrElement)).toEqual([5,4,3,2,1])
  });
})
