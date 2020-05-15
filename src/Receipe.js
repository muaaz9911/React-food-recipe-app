import React from 'react'
import './receipe.css'

function Receipe(props) {
    return (
        <div className ='receipe1'>

    <h1>{props.title}</h1>
            <p>Cal: {props.cal}</p>
            <img src={props.image}></img>
            <h3>Receipe: </h3>
            <ol>{props.ingr.map(ing=>(
                    <li> { ing} </li>
                    ))};
            </ol>
        </div>
    )
}

export default Receipe
