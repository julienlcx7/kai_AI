export const SET_MODELE = "SET_MODELE"; 

const initialState = {
    modele: "test",
};

export default function modeleReducer(state = initialState, action){
    switch (action.type) {
        case SET_MODELE:
            return { ...state, modele: action.payload};
        default:
            return state;
    }
}