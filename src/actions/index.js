import {ADD_TAG} from './types';

export function addTag(tag) {
    return {type: ADD_TAG, payload: tag}
}
