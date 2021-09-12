// import { Dispatch } from "redux";
// import { RollsAction, RollsActionTypes } from "../../types";
// import rolls from '../../components/API/mainPage.json';

// export const fetchRolls = () => {
//     return async (dispatch: Dispatch<RollsAction>) => {
//         try {
//             dispatch({type: RollsActionTypes.FETCH_ROLLS})

//             dispatch({type: RollsActionTypes.FETCH_ROLLS_SUCCESS, 
//                 payload: rolls})
//         } catch(e) {
//             dispatch({type: RollsActionTypes.FETCH_ROLLS_ERROR, 
//                 payload: 'Произошла ошибка при загрузке роллов'})
//         }
//     }
// }

import { Dispatch } from "redux";
import { RollsAction, RollsActionTypes } from "../../types";
import rolls from '../../components/API/mainPage.json';

export const fetchRolls = () => {
    return (dispatch: Dispatch<RollsAction>) => {
        try {
            dispatch({type: RollsActionTypes.FETCH_ROLLS})

            dispatch({type: RollsActionTypes.FETCH_ROLLS_SUCCESS, 
                payload: rolls})
        } catch(e) {
            dispatch({type: RollsActionTypes.FETCH_ROLLS_ERROR, 
                payload: 'Произошла ошибка при загрузке роллов'})
        }
    }
}