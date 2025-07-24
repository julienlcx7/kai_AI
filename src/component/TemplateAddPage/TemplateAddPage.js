import React, { useState } from 'react';
import './TemplateAddPage.css'; // Assurez-vous que ce fichier existe
import Input_form from '../Input_form/Input_form';
import 'iconify-icon';
import { useNavigate } from "react-router-dom";

const TemplateAddPage = ({ title, onButtonClick }) => {
  // Navigation
  const navigate = useNavigate();

  // États locaux pour chaque champ
  const [templateName, setTemplateName] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [gitRepo, setGitRepo] = useState("https://");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // Gestionnaire de sauvegarde
  const handleSaveTemplate = () => {
    const templateData = {
      name: templateName,
      description: templateDescription,
      repository: gitRepo,
      login,
      password,
    };

    // Appeler une fonction externe ou traiter les données ici
    console.log("Template saved:", templateData);
    if (onButtonClick) {
      onButtonClick(templateData);
    }

    // Redirection vers Dashboard après la sauvegarde
    navigate("/Dashboard");
  };

  return (
    <div className='Content'>
      <div className='element_template'>
        <div className='Private_template'>
          <Input_form
            input_name="name_template"
            label_name="Template Name"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />
          <Input_form
            input_name="description_template"
            label_name="Template Description"
            value={templateDescription}
            onChange={(e) => setTemplateDescription(e.target.value)}
          />
          <Input_form
            input_name="git_repo"
            label_name="Git Repository URL"
            value={gitRepo}
            onChange={(e) => setGitRepo(e.target.value)}
          />
          <div className='id_template'>
            <Input_form
              input_name="login"
              label_name="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input_form
              input_name="password"
              label_name="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSaveTemplate} className='btn_save_template'>
            <iconify-icon icon="ph:download-fill"></iconify-icon>
            Save Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateAddPage;
