import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const CardTitle = ({ title, icon }) => {
  const iconColor = "#73819a";
  const icons = {
    money: <FontAwesomeIcon color={iconColor} icon={faMoneyBill} />,
    recurring: <FontAwesomeIcon color={iconColor} icon={faRecycle} />
  }

  const renderIcon = () => {
    return icons[icon] ? icons[icon] : null
  }

  return (
    <div className="title">
      {renderIcon()}
      <h2>{title}</h2>
    </div>
  )
}

export { CardTitle }
