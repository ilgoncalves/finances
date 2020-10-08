import React from 'react';
import { CardContainer, CardTitle } from '../../atoms';

const Card = ({ title, children }) => {
  return (
    <CardContainer>
      <div>
        <CardTitle title={title} />
        <div className="content">
          {children}
        </div>
      </div>
    </CardContainer>
  )
}

export { Card }
