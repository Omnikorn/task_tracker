import React from 'react'
//makes the button a reusale component
const Button = ({color, text}) => {
  return (
      <button style={{backgroundColor: color}}className="btn">{text}</button>
  )
}

Button.defaultProps = {
    color: "steelblue"
}

export default Button