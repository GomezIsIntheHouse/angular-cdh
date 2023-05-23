import {ActionReducerMap } from "@ngrx/store";
import { authFeatureKey, authReducer } from "./auth/auth.reducer";

export interface AppState {
    [authFeatureKey]:any; //todo
}

export const actionReducerMap: ActionReducerMap<AppState> = {
    [authFeatureKey]: authReducer,

}
