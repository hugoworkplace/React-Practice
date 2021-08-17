import React from 'react'

interface IButtonProps {
    color:string
    text:string
    onClick:()=>void
}
const Button: React.FC<IButtonProps> = ({ color, text, onClick }) => {


    return (
        <button className="btn"
            style={{ "backgroundColor": color }}
            onClick={onClick}>
            {text}
        </button>


    )
}




export default Button


