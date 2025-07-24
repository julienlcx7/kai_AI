export const SET_USERNAME = "SET_USERNAME"; 
const initialState = {
    username: null,
};

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.payload};
        default:
            return state;
    }
}