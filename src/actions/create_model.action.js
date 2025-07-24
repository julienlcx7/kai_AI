import axios from 'axios';

export const SET_CREATE_MODELE = "SET_CREATE_MODELE";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const create_model = (token, tenant, modelName, modelType) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        axios.post(`https://kai.hosteur.cloud/api/v1/tenants/${tenant}/models/${modelName}?type=${modelType}`, config)
            .then(res => {
                dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
                console.log(res);
                dispatch({ type: SET_CREATE_MODELE, payload: res.data.body });
            })
            .catch(error => {
                dispatch({ type: FETCH_POST_FAILURE, payload: error });
                console.error('Error fetching model data:', error);
            });
    }
}
