import React, { useState } from "react";
import 'iconify-icon';
import "./InstanceTable.css";
import Navbar from "../../component/Navbar/Navbar";
import planet from "../../img/planet.png"
const data = [
  {
    instanceName: "#8a7j63f64",
    template: "Stable Diffusion",
    resources: "16 vCPU 61GB RAM",
    version: "0.12",
    status: "Online",
    pods: [
      { name: "Pod_1", image: "Pytorch", resources: "12 vCPU 32GB RAM", status: "Online" },
      { name: "Pod_2", image: "TensorFlow", resources: "12 vCPU 32GB RAM", status: "Offline" },
    ],
  },
  {
    instanceName: "#be56d3o9",
    template: "Pytorch",
    resources: "12 vCPU 32GB RAM",
    version: "0.62",
    status: "Pending",
    pods: [],
  },
  {
    instanceName: "#be56d3o9",
    template: "Pytorch",
    resources: "12 vCPU 32GB RAM",
    version: "0.71",
    status: "Offline",
    pods: [],
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Online":
      return "status-online";
    case "Offline":
      return "status-offline";
    case "Pending":
      return "status-pending";
    default:
      return "status-unknown";
  }
};

const getActionIcons = (status) => {
  switch (status) {
    case "Online":
      return (
        <>
          <iconify-icon icon="material-symbols:stop" className="action-icon" />
          <iconify-icon icon="mdi:trash" className="action-icon" />
          <iconify-icon icon="mdi:edit" className="action-icon" />
        </>
      );
    case "Offline":
      return (
        <>
          <iconify-icon icon="material-symbols:play-arrow" className="action-icon" />
          <iconify-icon icon="mdi:trash" className="action-icon" />
          <iconify-icon icon="mdi:edit" className="action-icon" />
        </>
      );
    case "Pending":
      return (
        <>
          <iconify-icon icon="mdi:pause" className="action-icon" />
          <iconify-icon icon="mdi:trash" className="action-icon" />
          <iconify-icon icon="mdi:edit" className="action-icon" />
        </>
      );
    default:
      return (
        <>
          <iconify-icon icon="mdi:help-circle-outline" className="action-icon" />
        </>
      );
  }
};


const InstanceTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="Content">
      <Navbar Title={"Instances"} element={planet} id_element={"planet"} />
      <div className="element_modele">
        <div className="table-container">
          <table className="instance-table">
            <thead>
              <tr>
                <th>Instance Name</th>
                <th>Template</th>
                <th>Resources</th>
                <th>Version</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <React.Fragment key={index}>
                 <tr className="main-row">
                 <td className="instance-name">
                  <button
                    onClick={() => toggleRow(index)}
                    className="instance-name-btn"
                    aria-expanded={expandedRow === index} // Indique l'état étendu pour l'accessibilité
                  >
                    <iconify-icon
                      icon="eva:arrow-down-fill"
                      className={`arrow-icon ${expandedRow === index ? "rotated" : ''}`}
                    ></iconify-icon>
                    {row.instanceName}
                  </button>
                </td>
                    <td>{row.template}</td>
                    <td>{row.resources}</td>
                    <td>{row.version}</td>
                    <td>
                      <span className={`status-chip ${getStatusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      {getActionIcons(row.status)}
                    </td>
                  </tr>

                  {expandedRow === index && row.pods.length > 0 && (
                    <tr className="pod-row">
                      <td colSpan="6">
                        <div className="link_pod">
                          <div>
                            <span className="link_span">Open-webui</span>
                            <a href="https://api.hosteur_kai/v1/5gf1df52hsdwv/run" target="_blank" rel="noopener noreferrer">
                              https://api.hosteur_kai/v1/5gf1df52hsdwv/run
                            </a>
                          </div>
                          <div className="link_pod">
                            <span className="link_span">Metrics</span>
                            <a href="https://api.hosteur_kai/v1/5gf1df52hsdwv/run" target="_blank" rel="noopener noreferrer">
                              https://api.hosteur_kai/v1/5gf1df52hsdwv/run
                            </a>
                          </div>
                        </div>
                        <table className="pod-table">
                          <thead>
                            <tr className="name-pod">
                              <th>Pod Name</th>
                              <th>Image</th>
                              <th>Resources</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="pod_info">
                            {row.pods.map((pod, podIndex) => (
                              <tr key={podIndex}>
                                <td>{pod.name}</td>
                                <td>{pod.image}</td>
                                <td>{pod.resources}</td>
                                <td>
                                  <div className={`status-pod ${getStatusClass(pod.status)}`}></div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstanceTable;
