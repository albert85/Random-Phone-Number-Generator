import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { GENERATE_TELEPHONE_NUMBER_SUCCESS, GET_ALL_TELEPHONE_NUMBER_SUCCESS } from '../../common/types';
import { generatePhoneNumbers, getAllPhoneNumbers } from '../../action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

describe('Action creators', () => {
    const response = {
        message: "Telephone successfully generated",
        max: "0808331345",
        min: "0154646646",
        data: ["0808331345", "0154646646", "0254646646"]
    };
  
    beforeEach(() => {
        moxios.install();
      });
    
      afterEach(() => {
        moxios.uninstall();
      });

      it('should generate random phone number', async (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 201,
              response: {
                ...response
              }
            });
          });
      
          const expectedResponse =
            {
              type: GENERATE_TELEPHONE_NUMBER_SUCCESS,
              payload: response,
            };
      
          await store.dispatch(generatePhoneNumbers(10,'ascr'))
            .then(() => {
              expect(store.getActions()[0]).toEqual(expectedResponse);
              done();
            });
          
      });

      it('should get all phone number', async (done) => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: {
              ...response,
              message: 'All telephone numbers successfully retrieved'
            }
          });
        });
        
        const expectedResponse =
        {
          type: GET_ALL_TELEPHONE_NUMBER_SUCCESS,
          payload: {...response, message: 'All telephone numbers successfully retrieved' },
        };
          await store.dispatch(getAllPhoneNumbers('ascr'))
            .then(() => {
              expect(store.getActions()[1]).toEqual(expectedResponse);
              done();
            });
          
      });
})
