import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

import { PhoneBook } from '../../pages/PhoneBook';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

Enzyme.configure({ adapter: new Adapter() });

describe('Random Number', () => {
    const response = {
        message: "",
        max: "",
        min: "",
        data: []
    }
    const props = {
        generatePhoneNumbers: jest.fn(),
        getAllPhoneNumbers: () => Promise.resolve({
            message: "Telephone successfully generated",
            max: "0808331345",
            min: "0154646646",
            data: ["0808331345", "0154646646", "0254646646"]
        }),
        phoneBook: {
            ...response
        }
    }

    const component = shallow(<PhoneBook {...props} />)

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should render the page', () => {
        expect(component).toMatchSnapshot();
    });

    it('should get all generated numbers', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 201,
              response: {
                ...response
              }
            });
          });
          const component = mount(<PhoneBook {...props} />)
        // console.log('before', component.instance().state);
        component.find('.get-all-btn').simulate('click');
        // console.log('after', component.instance().state);
        //   console.log(component.debug());
    });

})
