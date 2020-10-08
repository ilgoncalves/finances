import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
const CardTitle = ({ title, icon }) => {
  return (
    <div className="title">
      <FontAwesomeIcon color="#73819a" icon={faRecycle} />
      <h2>{title}</h2>
    </div>
  )
}

export { CardTitle }
