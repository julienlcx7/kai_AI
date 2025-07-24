import axios from 'axios';

export const SET_MODELE = "SET_MODELE";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const getmodel = (token) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`  
            }
        };

        axios.get("http://localhost:8080/pods", config)
            .then(res => {
                dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
                console.log(res);
                dispatch({ type: SET_MODELE, payload: res.data.body });
            })
            .catch(error => {
                dispatch({ type: FETCH_POST_FAILURE, payload: error });
                console.error('Error fetching user data:', error);
            });
    }
}
