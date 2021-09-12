
export enum RollsActionTypes {
    FETCH_ROLLS = 'FETCH_ROLLS',
    FETCH_ROLLS_SUCCESS = 'FETCH_ROLLS_SUCCESS',
    FETCH_ROLLS_ERROR = 'FETCH_ROLLS_ERROR'
}
interface FetchRollsAction {
    type: RollsActionTypes.FETCH_ROLLS
}
interface FetchRollsSuccess {
    type: RollsActionTypes.FETCH_ROLLS_SUCCESS
    payload: any[]
}
interface FetchRollsError {
    type: RollsActionTypes.FETCH_ROLLS_ERROR
    payload: string;
}

export type userAction = FetchRollsAction | FetchRollsSuccess | FetchRollsError

export interface RollsAction {
    type: string,
    payload?: any
}

export interface RollsState {
    rolls: any[];
    loading: boolean;
    error: null | string;
}