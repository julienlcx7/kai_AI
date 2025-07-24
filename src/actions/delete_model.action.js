import axios from 'axios';

export const DELETE_MODELE_SUCCESS = "DELETE_MODELE_SUCCESS";
export const DELETE_MODELE_FAILURE = "DELETE_MODELE_FAILURE";

export const deleteModele = (token, modeleId) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        axios.delete(`https://kai.hosteur.cloud/api/v1/tenants/tenant/models/${modeleId}`, config)
            .then(res => {
                dispatch({ type: DELETE_MODELE_SUCCESS, payload: res.data });
                console.log("Modèle supprimé avec succès :", res.data);
            })
            .catch(error => {
                dispatch({ type: DELETE_MODELE_FAILURE, payload: error });
                console.error('Erreur lors de la suppression du modèle :', error);
            });
    }
}
