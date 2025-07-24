import React, { useState } from "react";
import './DynamicForm.css'; 
const DynamicForm = ({type,name_input}) => {
  const [fields, setFields] = useState([{ id: Date.now(), value: "" }]);

  // Ajouter un nouveau champ
  const handleAddField = () => {
    setFields([...fields, { id: Date.now(), value: "" }]);
  };

  // Supprimer un champ spécifique
  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Mettre à jour la valeur d'un champ
  const handleFieldChange = (id, newValue) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };

  // Soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values:", fields);
    alert(`Formulaire soumis : ${JSON.stringify(fields.map((f) => f.value))}`);
  };

  return (
    <div className="dfrom">
      <form className="dynamic_form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div className="case_form" key={field.id}>
            <label>
              {name_input} {index + 1}
              <input
                type={type}
                value={field.value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                placeholder={`${name_input}_${index + 1}`}
              />
            </label>
            {index === 0 ? (
              <button
                type="button"
                className="btn_add"
                onClick={handleAddField}
              >
                <iconify-icon icon={"mingcute:add-fill"}/>
              </button>
            ) : (
              <button
                type="button"
                className="btn_add"
                onClick={() => handleRemoveField(field.id)}
              >
                <iconify-icon icon={"pepicons-pop:line-x"}/>
              </button>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default DynamicForm;
