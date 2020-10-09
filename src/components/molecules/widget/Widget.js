import React, { useState, useEffect } from 'react';
import { WidgetContainer } from '../../atoms';

const Widget = ({triggerPosition, children}) => {
  const [coordinates, setCoordinates] = useState(null)

  //posiciona o widget
  useEffect(() => {
    let newCoordinates = {}
    if (triggerPosition.x > 250) {
      newCoordinates.left = triggerPosition.x - 185;
    } else {
      newCoordinates.left = triggerPosition.x + 30;
    }
    newCoordinates.top = triggerPosition.y + triggerPosition.height + 10;
    setCoordinates(newCoordinates);
  }, [triggerPosition, setCoordinates])


  return (
    coordinates && <WidgetContainer top={coordinates.top} left={coordinates.left}>
      {children}
    </WidgetContainer>
  )
}

export { Widget }
