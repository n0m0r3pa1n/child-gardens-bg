import actions from "./constants"

const initialState = {
    gardens: []
}

export const gardensReducer = (state = initialState, action) => {
    console.log(state, action);

    switch (action.type) {
        case actions.GARDENS_FETCHED:
            return {
                ...state,
                list: state.gardens
            }
        default:
            return state
    }
};
