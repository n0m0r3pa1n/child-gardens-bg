import actions from "./constants"

const initialState = {
    list: []
}

export const gardensReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GARDENS_FETCHED:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
};
