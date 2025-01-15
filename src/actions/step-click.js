export const stepClick = (index) => (dispatch, getState) => {
    const state = getState().stateGame;
    const newField = [...state.field];
    const winnerSchema = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    if (newField[index] || state.isGameEnded) return;

    newField[index] = state.currentPlayer;

    for (let [x, y, z] of winnerSchema) {
        if (newField[x] && newField[x] === newField[y] && newField[x] === newField[z]) {
            dispatch({
                type: "UPDATE_GAME_STATUS",
                payload: { field: newField },
            });
            dispatch({
                type: "SET_GAME_STATUS",
                payload: { isGameEnded: true, isDraw: false },
            });
            return;
        }
    }

    if (!newField.includes("")) {
        dispatch({
            type: "UPDATE_GAME_STATUS",
            payload: { field: newField },
        });
        dispatch({
            type: "SET_GAME_STATUS",
            payload: { isGameEnded: true, isDraw: true },
        });
    } else {
        dispatch({
            type: "UPDATE_GAME_STATUS",
            payload: { field: newField },
        });
        dispatch({ type: "TOGGLE_GAME_STATUS" });
    }
};
