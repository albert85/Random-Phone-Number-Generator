import PhoneBookReducer from '../../reducer/phoneBook';
import { GENERATE_TELEPHONE_NUMBER_SUCCESS, GET_ALL_TELEPHONE_NUMBER_SUCCESS, GET_ALL_TELEPHONE_NUMBER_FAILURE } from '../../common/types';

describe('PhoneBookReducer', () => {
    const response = {
        message: "Telephone successfully generated",
        max: "0808331345",
        min: "0154646646",
        data: ["0808331345", "0154646646", "0254646646"]
    };
    it('should return generate number', async () => {
        const expectedResponse = {
            type: GENERATE_TELEPHONE_NUMBER_SUCCESS,
            payload: { ...response }
        }
      expect(PhoneBookReducer({}, expectedResponse)).toEqual(response);
  });

  it('should return all generated number', async () => {
    const expectedResponse = {
        type: GET_ALL_TELEPHONE_NUMBER_SUCCESS,
        payload: { ...response, message: 'All telephone numbers successfully retrieved' }
    }
      expect(PhoneBookReducer({}, expectedResponse)).toEqual(expectedResponse.payload);
  });
  it('should return all generated number', async () => {
    const expectedResponse = {
        type: GET_ALL_TELEPHONE_NUMBER_FAILURE,
        payload: { ...response, message: 'All telephone numbers successfully retrieved' }
    }
      expect(PhoneBookReducer({}, expectedResponse)).toEqual({});
  });
})
