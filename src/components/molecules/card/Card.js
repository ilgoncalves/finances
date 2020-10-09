import React from 'react';
import { CardContainer, CardTitle, ButtonIcon } from '../../atoms';

const Card = ({ title, children, icon, floatingButton, onClickFloating, floatingButtonId }) => {
  return (
    <CardContainer>
      <div>
        <CardTitle title={title} icon={icon}/>
        <div className="content">
          {children}
        </div>
        {floatingButton && <div className="button-container-floating">
          <ButtonIcon id={floatingButtonId} icon={"plus"} onClick={onClickFloating}/>
        </div>}
      </div>
    </CardContainer>
  )
}

export { Card }
