import { createReducer, on } from "@ngrx/store";
import { guardarUsuario } from "./userdata.actions";

//tengo que brindarle el estado inicial de la app
export interface usuarioState {
    email: string;
    
}

const initialState: usuarioState = {
    email: '',
}
//fin asignacion estado inicial de la app

export const guardarUser = createReducer<usuarioState>(
    initialState,
    //en ON debo especificar que hacer cuando recibo una accion de tipo incrementar. Primero llamo a la funcion declarada en 
    //userData.
    // on(guardarUsuario, (currentState) => {
    //     // currentState.email = localStorage.getItem('users');
    //     // return {
    //     //     valor: currentState.email = localStorage.getItem('users')
    //     // }
    // })
    )


//paso n2 -- que hacer cuando llega una accion del tipo guardar usuario o eliminar usuario