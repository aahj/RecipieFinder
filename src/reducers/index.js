import { SET_RECIPIES, SET_FAV_RECIPIE } from '../Constants/const';
import { combineReducers } from 'redux';

function recipies(state = [], action) {
    switch (action.type) {
        case SET_RECIPIES:
            return action.items;
        default:
            return state;
    }
}

function favoriteRecipie(state = [], action) {
    switch (action.type) {
        case SET_FAV_RECIPIE:
            state = [...state, action.recipie]
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    recipies,
    favoriteRecipie
});
export default rootReducer;