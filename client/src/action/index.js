import axios from 'axios';

import { GENERATE_TELEPHONE_NUMBER_SUCCESS, GET_ALL_TELEPHONE_NUMBER_SUCCESS } from '../common/types'

/**
 * This method dispatches generating phone number
 * @param {array} numberGenerated 
 */
export const generatePhoneNumbersAsync = numberGenerated => ({
    type: GENERATE_TELEPHONE_NUMBER_SUCCESS,
    payload: numberGenerated
});

/**
 * This method dispatches get all generated phonen number
 * @param {array} allNumberGenerated 
 */
export const getAllPhoneNumbersAsync = allNumberGenerated => ({
    type: GET_ALL_TELEPHONE_NUMBER_SUCCESS,
    payload: allNumberGenerated
});


export const generatePhoneNumbers = (amountToGenerate, sort) => (dispatch) => {
    return axios
        .get(`/api/v1/phone-numbers?limit=${amountToGenerate}&sort=${sort}`)
        .then((res) => {
            dispatch(generatePhoneNumbersAsync(res.data));
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}
export const getAllPhoneNumbers = (sort) => (dispatch) => {
    return axios
        .get(`/api/v1/phone-numbers-list?sort=${sort}`)
        .then((res) => {
            dispatch(getAllPhoneNumbersAsync(res.data));
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}