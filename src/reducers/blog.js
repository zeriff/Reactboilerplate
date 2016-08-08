import {ADD_TAG} from './../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_TAG:
            console.log("adding tag : ", action.payload);
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}
