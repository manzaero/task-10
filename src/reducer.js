export const initialState = {
    currentPlayer: 'X',
    isGameOver: false,
    isDrawing: false,
    field: ["", "", "", "", "", "", "", "", ""]
};

export const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_GAME_STATUS': {
            return {
                ...state,
                currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
            }
        }
        case 'SET_GAME_STATUS': {
            return {
                ...state,
                isGameEnded: action.payload.isGameEnded,
                isDraw: action.payload.isDraw
            }
        }
        case 'UPDATE_GAME_STATUS': {
            return {
                ...state,
                field: action.payload.field,
            }
        }
        case 'RESET_GAME_STATUS': {
            return initialState
        }
        default:
            return state
    }
}