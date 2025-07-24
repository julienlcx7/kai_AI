import axios from 'axios';

export const SET_CREATE_INSTANCE = "SET_CREATE_INSTANCE";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const create_instance = (token, tenant, modelName, instance_name) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        axios.post(`https://kai.hosteur.cloud/api/v1/tenants/${tenant}/models/${modelName}/instances/${instance_name}`, config)
            .then(res => {
                dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
                console.log(res);
                dispatch({ type: SET_CREATE_INSTANCE, payload: res.data.body });
            })
            .catch(error => {
                dispatch({ type: FETCH_POST_FAILURE, payload: error });
                console.error('Error fetching model data:', error);
            });
    }
}
