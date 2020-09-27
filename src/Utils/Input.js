import React from 'react'

function Input(props) {
    return (
        <input
            placeholder={props.placeholder}
            className={props.className}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          >{props.children}</input>
    )
}

export default Input
