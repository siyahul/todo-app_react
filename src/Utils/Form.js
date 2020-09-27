import React from 'react'

function Form(props) {
    return (
        <div>
        <form className={props.className} onSubmit={props.onSubmit}>
            {props.children}
        </form>
        </div>
    )
}

export default Form
