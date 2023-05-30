import { createReducer, on } from "@ngrx/store"
import { Usuario } from "src/app/core/models"
import { EstablecerUsuarioAutenticado, QuitarUsuarioAutenticado } from "./auth.action";

export const authFeatureKey = 'auth'

export interface AuthState {
    authUser: Usuario | null;
}

const initialState: AuthState = {
    authUser: null,
}

export const authReducer = createReducer(
    initialState,

    on(EstablecerUsuarioAutenticado, (currentState, action) => {
        return {
            authUser: action.payload
        }
    }),
    
    on(QuitarUsuarioAutenticado, (currentState)=>{
        return {
            authUser: null
        }
    }) 

    
    )