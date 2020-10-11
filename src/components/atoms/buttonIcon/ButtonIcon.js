import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ButtonIcon = ({ onClick, icon, id }) => {
  const iconColor = "#db6ab5";
  const icons = {
    plus: <FontAwesomeIcon color={iconColor} icon={faPlus} />,
    minus: <FontAwesomeIcon color={iconColor} icon={faMinus} />,
  }

  const renderIcon = () => {
    return icons[icon] ? icons[icon] : null
  }

  return (
    <button id={id} className="button-icon" onClick={onClick}>
      {renderIcon()}
    </button>
  )
}

export { ButtonIcon }
