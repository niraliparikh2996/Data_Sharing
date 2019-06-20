import { AppState, State } from './app.state';
import * as UserAction from '../store/app.actions';
// import { routerReducer, RouterReducerState } from '@ngrx/router-store';
// import { ActionReducerMap } from '@ngrx/store';
// import { RouterStateUrl } from '../shared/utils';

//Contact NGRX
export const defaultState: AppState = {
    userData: []
}

// export interface State1 {
//     router: RouterReducerState<RouterStateUrl>;
//   }
// export const reducers: ActionReducerMap<State1> = {
//     router: routerReducer,
//   };
//User NGRX
export const initialState: State = {
    data: []
}
export function userReducer(state: AppState = defaultState, action: UserAction.Actions, userState: State = initialState) {

    switch (action.type) {
        //contact ngrx
        case UserAction.SAVE:
            return {
                ...state, userData: action.payload
            }
        case UserAction.LOAD:
            return {
                ...userState
            }
        //user NGRX    
        case UserAction.USERDATA:
            return {
                ...userState,
                data: action.userPayLoad
            }
    }

}