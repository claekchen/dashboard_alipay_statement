import * as types from '../constants/action-type'
import {findElement, removeIndex} from '../utils'
export const addFilterAction = (name) => {
    return {
        type: types.ADD_FILTER,
        name
    }
}
const updateOptionByFilter = () => {
    const {dispatch, getState} = window.store
}