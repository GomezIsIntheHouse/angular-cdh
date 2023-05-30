import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";


export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthUser = createSelector(
    selectAuthState,
    //atajo directo para extraer el usuario del authState, que me quiere decir que es el usuario que esta en ese momento
    //logueado en nuestro sistema
    ( state  )=> state.authUser
    
)