import React from 'react';
import './Machine.css';  // Assurez-vous d'avoir le CSS correspondant
import 'iconify-icon';

const Machine = ({ logo_modele, title, id, name_image, token, deleteModele }) => {
  // Fonction pour gérer la suppression du modèle
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this model?")) {
      deleteModele(token, id);  // Appelle la fonction de suppression avec le token et l'ID du modèle
    }
  };

  return (
    <div className='info'>
      <div className='info_machine'>
        <img src={logo_modele} alt={title} />
        <div>
          <div className='caracteristique'>
            <h2>{title}</h2>
            <p>ID: {id}</p>
            <p>{name_image}</p>
          </div>
          <div className='btn_modele'>
          <button>
            <iconify-icon icon={"mdi:pencil"} />
          </button>
          <button onClick={handleDelete}>  {/* Appelle handleDelete lors du clic */}
            <iconify-icon icon={"mdi:trash"} />
          </button>
          <button>
            <iconify-icon icon={"clarity:paste-solid"} />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Machine;
