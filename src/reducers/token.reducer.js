export const SET_TOKEN = "SET_TOKEN"; // Ensure this is exported if used elsewhere
export const SET_AUTH = "SET_AUTH"; 
const initialState = {
    token: null,
    auth: null,
};

export default function tokenReducer(state = initialState, action){
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload,auth: null};
            case SET_AUTH:
                return {...state,auth: action.payload,};
        default:
            return state;
    }
}