import {ActionTypes} from '../constants/ActionTypes'
export const SetProducts = (items) => {
    return {
            type: ActionTypes.SET_PRODUCTS,
            payload: items,
};
};
