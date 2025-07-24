import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import './Slidebar_items.css';  // Assurez-vous d'avoir le fichier CSS correspondant

const SlidebarItems = ({ parametres, icon_parametres, active = false }) => {
  return (
    <div className={`slidebar-item ${active ? 'active' : ''}`}>
      <Icon icon={icon_parametres} className="iconify" />
      <span>{parametres}</span>
    </div>
  );
}

SlidebarItems.propTypes = {
  parametres: PropTypes.string.isRequired,
  icon_parametres: PropTypes.string.isRequired,  // Change to string
  active: PropTypes.bool,
};

export default SlidebarItems;
