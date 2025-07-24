import React, { useState } from 'react';
import './Pods.css';
import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/Content/Content';
import Pods_bar from '../../component/Pods_bar/Pods_bar';
import Pods_card from '../../component/Pods_card/Pods_card';
import Machine from '../../component/Machine/Machine';
import docker_icon from '../../img/docker.png';
import Machine_Pods from '../../component/Machine_Pods/Machine_Pods';
import Pods_price from '../../component/Pods_price/Pods_price';
import Pods_info from '../../component/Pods_info/Pods_info';
import docker_img from '../../img/docker.png'
import Template from '../../component/Template/Template';
import SearchBar from '../../component/SearchBar/SearchBar';
const Pods = () => {
  const [showContent, setShowContent] = useState(true);
  const [showNextPage, setShowNextPage] = useState(false);

  const handleButtonClick = () => {
    setShowContent(false);
  };

  const handleNextPageClick = () => {
    setShowNextPage(true);
  };

  return (
    <main>
      <div className='Content'>
      <Navbar Title={"Instance Template"} />
      {showContent ? (
        <div className='element_modele'>
          <div className='top_carre'>
          <h1>Instance Template</h1>
          <SearchBar/>
        </div>
        <div className='grid_template'>
        <Template logo_modele={docker_img} title={"A11 Stable Diffusion"} id={"3e23fd3er5d"} name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"} onButtonClick={handleButtonClick}/>
        <Template logo_modele={docker_img} title={"A11 Stable Diffusion"} id={"3e23fd3er5d"} name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"} onButtonClick={handleButtonClick}/>
        <Template logo_modele={docker_img} title={"A11 Stable Diffusion"} id={"3e23fd3er5d"} name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"} onButtonClick={handleButtonClick}/>
        <Template logo_modele={docker_img} title={"A11 Stable Diffusion"} id={"3e23fd3er5d"} name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"} onButtonClick={handleButtonClick}/>
        </div>
        </div>
      ) : (
        <div className='element_pods'>
          {!showNextPage ? (
            <>
              <Pods_bar />
              <div className='grid_storage'>
              <button onClick={handleNextPageClick}><Pods_card carte_name={"H100 SXM"} price={"$3.99/hr"} carac={"80 GB VRAM"} carac2={"125 GB RAM 16 vCPU"} gpu={"8 max"} level={"medium"} /></button>
              <button onClick={handleNextPageClick}><Pods_card carte_name={"H100 SXM"} price={"$3.99/hr"} carac={"80 GB VRAM"} carac2={"125 GB RAM 16 vCPU"} gpu={"8 max"} level={"medium"} /></button>
              <button onClick={handleNextPageClick}><Pods_card carte_name={"H100 SXM"} price={"$3.99/hr"} carac={"80 GB VRAM"} carac2={"125 GB RAM 16 vCPU"} gpu={"8 max"} level={"medium"} /></button>
              <button onClick={handleNextPageClick}><Pods_card carte_name={"H100 SXM"} price={"$3.99/hr"} carac={"80 GB VRAM"} carac2={"125 GB RAM 16 vCPU"} gpu={"8 max"} level={"medium"} /></button>
              <button onClick={handleNextPageClick}><Pods_card carte_name={"H100 SXM"} price={"$3.99/hr"} carac={"80 GB VRAM"} carac2={"125 GB RAM 16 vCPU"} gpu={"8 max"} level={"medium"} /></button>
              <button onClick={handleNextPageClick}><Pods_card carte_name={"H100 SXM"} price={"$3.99/hr"} carac={"80 GB VRAM"} carac2={"125 GB RAM 16 vCPU"} gpu={"8 max"} level={"medium"} /></button>
              </div>
            </>
          ) : (
            <div className='next_page_content'>
              <Machine_Pods logo_modele={docker_icon} title={"A11 Stable Diffusion"} id={"3e23fd3er5d"} name_image={"ghcr.io/ai-dock/stable-diffusion-webui:latest"}/>
              <div className='grid_pods'>
                <Pods_price carte_name={"On-Demand"} price={"$3.79/hr $636.72"} description={"pay as you go, with costs based on actual usage time"}/>
                <Pods_price carte_name={"On-Demand"} price={"$3.79/hr $636.72"} description={"pay as you go, with costs based on actual usage time"}/>
                <Pods_price carte_name={"On-Demand"} price={"$3.79/hr $636.72"} description={"pay as you go, with costs based on actual usage time"}/>
                <Pods_price carte_name={"On-Demand"} price={"$3.79/hr $636.72"} description={"pay as you go, with costs based on actual usage time"}/>
              </div>
              <div className='grid_pods'>
                <Pods_info title={"Pricing Summary"} one={"GPU Cost:"} value_one={"$3.99 /hr"} two={"Running Disk Cost:"} value_two={"$0.006 / hr"} three={"Exited Disk Cost:"} value_three={"$0.006 / hr"}/>
                <Pods_info title={"Pods Summary"} one={"1x H100 SXM"} two={"125 GB RAM • 16 vCPU"} three={"Total Disk:"} value_three={"40GB"}/>
              </div>
              <button onClick={handleButtonClick}>Deploy On-Demand</button>
            </div>

          )}
        </div>
      )}
      <Slidebar />
      </div>
    </main>
  );
};

export default Pods;
