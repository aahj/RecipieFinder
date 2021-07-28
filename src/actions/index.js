import { SET_RECIPIES, SET_FAV_RECIPIE } from '../Constants/const';

export function setRecipies(items) {
    return {
        type: SET_RECIPIES,
        items
    }
}

export function favRecipie(recipie) {
    return {
        type: SET_FAV_RECIPIE,
        recipie
    }
}