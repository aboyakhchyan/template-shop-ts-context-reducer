import { IProductProps } from "../../context/types"
import React, { useContext } from "react"
import './product.css'
import { ProductContext } from "../../context/context"


export const Product: React.FC<IProductProps> = ({id, name, price, photo, onDispatch}) => {

    return (
        <div className="col-md-4 prod">
                <img src={photo}></img>
                <h6>{name}</h6>
                <p>price: <strong>{price} USD</strong></p>
                <button 
                    className="btn btn-info"
                    onClick={() => onDispatch({type: 'add/product', payload: id})}
                    >Move</button>
        </div>  
    )
}