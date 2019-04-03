import {
    GenerateArrayOfNumber,
    clearFile,
    GenerateAndSave,
    sortAscending,
    sortDescending
} from 'helper/util';

describe('Utility Helper ', () => {
    let mockData = [1,3,4,2,5]

    beforeAll((done) => {
        clearFile();
        done()
      })

  it('should generate array of number', () => {
      expect(GenerateArrayOfNumber(9)).toHaveLength(9);
  });

  it('should generate array of number if limit is greater than 10000', () => {
      expect(GenerateArrayOfNumber(30000)).toHaveLength(10000);
  });

  it('should read array of number', () => {
      expect(GenerateAndSave(9)).toHaveLength(9);
  });

  it('should sort array of number in ascending order', () => {
      expect(sortAscending(mockData)).toEqual([1,2,3,4,5]);
  });

  it('should sort array of number in descending order', () => {
      expect(sortDescending(mockData)).toEqual([5,4,3,2,1]);
  });
})
