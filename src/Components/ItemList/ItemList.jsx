import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div className="ventana">
      {productos.map(prod => (
        <Item key={prod.id} productos={prod}/>
      ))}
    </div>
  )
}

export default ItemList