import React from 'react'

function Button(props) {
  return (
    <button className="favorite styled" type="button" onClick={props.handleclick} >Display Characters</button>
  )
}

export default Button