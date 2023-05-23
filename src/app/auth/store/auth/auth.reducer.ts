import { createReducer } from "@ngrx/store"
import { Usuario } from "src/app/core/models"

export const authFeatureKey = 'auth'

export interface AuthState {
    authUser: Usuario | null;
}

const initialState: AuthState = {
    authUser: null,
}

export const authReducer = createReducer({initialState})