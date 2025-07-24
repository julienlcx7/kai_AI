import React from 'react';
import './Dashboard.css';
import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/Content/Content';
import Card from '../../component/Card/Card';
import inference from '../../img/inference.png';
import ressource from '../../img/ressources.png';
import doc from "../../img/documentation_new.jpg";
import workbench from "../../img/mlworkbench.png";
import ai_sas from '../../img/aisaas.png';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <main>
      <div className='Content'>
        <Navbar Title={"Dashboard"}/>
        <div className='element'>
          <div className='grid_dashboard'>
            <Link to="/Explore">
              <Card img={inference} description={"Déployer une application Web utilisant les AI de votre choix, tels que Chatbot, RAG, Embedding et Generative AI, en un simple clic sur des instances de calcul privé. AiFlow Inference Apps vous permet aussi de concevoir vos des applications avec des composants AI."}/>
            </Link>
            <Link to={process.env.REACT_APP_JUPYTER_URL || "https://jupyter.org/"}>
              <Card img={workbench} description={"Utilisez l'outil Kubeflow sur une plateforme de Machine Learning, avec PyTorch, TensorFlow et autres frameworks. Lancez une instance Jupyter Notebook pour préparer votre modèle, maîtrisez vos ressources et planifiez vos calculs. Concevez vos workflow ML directement depuis la même interface."}/>
            </Link>
            <Link to={process.env.REACT_APP_CHAT_URL || "https://chat.openai.com/"}>
              <Card img={ai_sas} description={"Remplacer en mode SaaS ChatGPT par un de nos modèles open source les plus performants depuis notre Chatbot ou nos API, hébergé en France, sans récupération de vos données, utilisez des LLMs tels que Mistral-Nemo, Mixtral, Llama et d'autres, ainsi que des modèles de GenAI comme Stable Diffusion et Whisper en mode SaaS facturé au token ou à la minute."}/>
            </Link>
            <Link to="/InstanceTable">
              <Card img={ressource} />
            </Link>
            <Link to={process.env.REACT_APP_DOCS_URL || "https://gitlab.mgnt-aiflow.hosteur.cloud/aiflow/documentation"}>
              <Card img={doc} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
