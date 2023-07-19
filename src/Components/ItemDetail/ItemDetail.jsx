

const ItemDetail= ({detalle}) => {

  return (
    <div>
       <div className="tarjetas">
        <img src={detalle.image} alt={detalle.title} />
        </div>
        <div>
        <h1>Nombre:{detalle.title}</h1>
        <p>Descripcion:{detalle.descripcion}</p>
        <h4>Precio: {detalle.price}</h4>
        </div> 
    </div>
  )
}

export default ItemDetail