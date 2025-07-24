import React, { useState } from 'react';
import './Explore.css';
import { useNavigate } from "react-router-dom";
import Navbar from '../../component/Navbar/Navbar';
import Input_form from '../../component/Input_form/Input_form';
import Pods_card from '../../component/Pods_card/Pods_card';
import Machine_Pods from '../../component/Machine_Pods/Machine_Pods';
import Pods_price from '../../component/Pods_price/Pods_price';
import Pods_info from '../../component/Pods_info/Pods_info';
import docker_img from '../../img/docker.png';
import docker_icon from '../../img/docker.png';
import Template from '../../component/Template/Template';
import Template_add from '../../component/Template_add/Template_add';
import TemplateAddPage from '../../component/TemplateAddPage/TemplateAddPage';
import Mini_Template from '../../component/Mini_Template/Mini_Template';
import DynamicForm from '../../component/DynamicForm/DynamicForm';
import cloud from '../../img/green_cloud.png'
const Explore = () => {
  const [currentView, setCurrentView] = useState('main'); // Gère la vue active
  const [showNextPage, setShowNextPage] = useState(false); // Gère la page des détails dans Pods
  const navigate = useNavigate();

  const handleShowPods = () => {
    setCurrentView('pods'); // Basculer vers la vue Pods
  };

  const handleShowTemplateAddPage = () => {
    setCurrentView('templateAdd'); // Basculer vers la vue TemplateAddPage
  };

  const handleNextPageClick = () => {
    setShowNextPage(true); // Basculer vers la page de détail
  };

  const handleBackToPodsClick = () => {
    setShowNextPage(false); // Revenir à la page Pods principale
  };

  return (
    <main>
      <div className="Content">
        <Navbar Title={"Marketplace"} showButton={true} element={cloud} id_element={"cloud"}/>

        {currentView === 'main' && (
          <div className="element_modele">
            <div className="top_carre">
              <h1>Public Template</h1>
            </div>
            <div className="grid_template">
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
              
              
            </div>
            <div id='private' className="top_carre">
              <h1>Private Template</h1>
            </div>
            <div id='private' className="grid_template">
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
              <Template
                logo_modele={docker_img}
                title={"A11 Stable Diffusion"}
                id={"3e23fd3er5d"}
                name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                onButtonClick={handleShowPods}
              />
             <Template_add
                title={"Add template"}
                onButtonClick={handleShowTemplateAddPage} // Basculer vers la vue TemplateAddPage
              />
            </div>
          </div>
        )}

        {currentView === 'templateAdd' && (
          <TemplateAddPage onBack={() => setCurrentView('main')} />
        )} 

        {currentView === 'pods' && (
          <div className="element_pods">
            {!showNextPage ? (
              <>
              <div className="top_template_instance">
                  <div className=''>
                    <label htmlFor="description">Template</label>
                    <Mini_Template
                      logo_modele={docker_img}
                      title="A11 Stable Diffusion"
                      id="3e23fd3er5d"
                      name_image="ghcr.io/ai-dock/stable-diffusion-webui:latest"
                    />
                    </div>
                    <Input_form
                      input_name="description"
                      label_name="Description"
                      value="test"
                      onChange={() => {}}
                    />
                </div>
                <h1>Flavor</h1>
                <div className="grid_storage">
                  <button onClick={""}>
                    <Pods_card
                      carte_name={"H100 SXM"}
                      price={"$3.99/hr"}
                      carac={"80 GB VRAM"}
                      carac2={"125 GB RAM 16 vCPU"}
                      gpu={"8 max"}
                      level={"medium"}
                    />
                  </button>
                  <button onClick={""}>
                    <Pods_card
                      carte_name={"H100 SXM"}
                      price={"$3.99/hr"}
                      carac={"80 GB VRAM"}
                      carac2={"125 GB RAM 16 vCPU"}
                      gpu={"8 max"}
                      level={"medium"}
                    />
                  </button>
                  <button onClick={""}>
                    <Pods_card
                      carte_name={"H100 SXM"}
                      price={"$3.99/hr"}
                      carac={"80 GB VRAM"}
                      carac2={"125 GB RAM 16 vCPU"}
                      gpu={"8 max"}
                      level={"medium"}
                    />
                  </button>
                  <button onClick={""}>
                    <Pods_card
                      carte_name={"H100 SXM"}
                      price={"$3.99/hr"}
                      carac={"80 GB VRAM"}
                      carac2={"125 GB RAM 16 vCPU"}
                      gpu={"8 max"}
                      level={"medium"}
                    />
                  </button>
                </div>
                <h1>Configuration</h1>
                <div className='form_config'>
                <DynamicForm type={"text"} name_input={"Variable"}/>
                <DynamicForm type={"password"} name_input={"Secrets"}/>
                </div>
                <button onClick={handleNextPageClick} className='btn_save_template_instance'>
                <iconify-icon icon="ph:download-fill"></iconify-icon>
                Save Template
              </button>
              </>
            ) : (
              <div className="next_page_content">
                <Machine_Pods
                  logo_modele={docker_icon}
                  title={"A11 Stable Diffusion"}
                  id={"3e23fd3er5d"}
                  name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}
                />
                <div className="grid_pods">
                  <Pods_price
                    carte_name={"On-Demand"}
                    price={"$3.79/hr $636.72"}
                    description={"pay as you go, with costs based on actual usage time"}
                  />
                  <Pods_price
                    carte_name={"On-Demand"}
                    price={"$3.79/hr $636.72"}
                    description={"pay as you go, with costs based on actual usage time"}
                  />
                  <Pods_price
                    carte_name={"On-Demand"}
                    price={"$3.79/hr $636.72"}
                    description={"pay as you go, with costs based on actual usage time"}
                  />
                  <Pods_price
                    carte_name={"On-Demand"}
                    price={"$3.79/hr $636.72"}
                    description={"pay as you go, with costs based on actual usage time"}
                  />
                </div>
                <div className="grid_pods">
                  <Pods_info
                    title={"Pricing Summary"}
                    one={"GPU Cost:"}
                    value_one={"$3.99 /hr"}
                    two={"Running Disk Cost:"}
                    value_two={"$0.006 / hr"}
                    three={"Exited Disk Cost:"}
                    value_three={"$0.006 / hr"}
                  />
                  <Pods_info
                    title={"Pricing Summary"}
                    one={"GPU Cost:"}
                    value_one={"$3.99 /hr"}
                    two={"Running Disk Cost:"}
                    value_two={"$0.006 / hr"}
                    three={"Exited Disk Cost:"}
                    value_three={"$0.006 / hr"}
                  />
                </div>
                <button onClick={() => navigate("/Dashboard")}>Deploy On-Demand</button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Explore;
