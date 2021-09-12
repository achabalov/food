import { RollsAction, RollsActionTypes, RollsState } from "../types";

const initialState: RollsState = {
    loading: false,
    rolls: [],
    error: null
}


const reducer = (state = initialState, action: RollsAction):RollsState => {
    switch(action.type) {
        case RollsActionTypes.FETCH_ROLLS:
            return {
                rolls: [],
                error: null,
                loading: true
            }
        case RollsActionTypes.FETCH_ROLLS_SUCCESS:
            return {
                rolls: action.payload,
                error: null,
                loading: false
            }
        case RollsActionTypes.FETCH_ROLLS_ERROR:
            return {
                rolls: [],
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

export default reducer;