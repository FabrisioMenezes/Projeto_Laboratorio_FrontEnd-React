const initialState = {
    usuario: {
        active: null,
        list: [
            'ana',
            'vania',
            'luiza',
            'samira'
        ]
    }
}

const usuarioReducer = (state = initialState.usuario, action) => {
   if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            active: action.payload
        }
   }
    return state;
}

export default  usuarioReducer;