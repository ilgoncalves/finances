import React from 'react'

const WidgetContainer = ({ top, left, children }) => {
  return (
    <div style={{ top: top, left: left }} className="form-widget">
      {children}
    </div>
  )
}

export { WidgetContainer }
