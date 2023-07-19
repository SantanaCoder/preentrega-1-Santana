import { Link } from 'react-router-dom'

const Item = ({productos}) => {
  return (
    <div className='tarjetas'>
      <h2>{productos.title}</h2>
      <img src={productos.image} alt={productos.title}/>
      <p>{productos.categoria}</p>
      <h4>Stock Disponible  {productos.stock}</h4>

     <Link to= {`/item/${productos.id}`}>Detalle de Producto</Link>
    </div>
  )
}

export default Item