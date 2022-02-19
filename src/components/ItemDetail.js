import ItemCount from './ItemCount';
import { React, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext }  from "./CartContext";

const ItemDetail = ( { item } ) => {
   
    const [ numberOfItemsAdded , setNumberOfItemsAdded ] = useState(0);
    
    const context = useContext( CartContext );

    const onAdd = ( event , number ) => {
        event.stopPropagation();        
        if ( number > 0 ){                        
            setNumberOfItemsAdded( number );            
            context.addItem( item, number );
        };
    };

    /*Renderizado Condicional. Parte del renderizado que se muestra bajo condiciones particulares*/
    let conditionalContent;
    
    if ( numberOfItemsAdded > 0 ) {
        conditionalContent =
            <Link to={`/cart`}>
                <button type="button" className="btn btn-success">Terminar mi compra</button>
            </Link>             
    } else {
        conditionalContent = <div className="row"><ItemCount stockLimit='5'onAdd={onAdd}/></div>;
    };   

    /*Renderizado*/;
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src={item.data.cover} alt='img'/>
                    </div>
                    <div className="col-4">                        
                        <div className="row"><p className="h1">{item.data.name}</p></div>
                        <div className="row">{item.data.description}</div>
                        <div className="row mt-4"><strong>Precio: {item.data.price}</strong></div>
                        {conditionalContent}
                    </div>
                </div>
            </div>
        </>
    )
  };
  
  export default ItemDetail;