import { useState, useEffect } from "react"
import { idProductos } from "../products"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  

  const [detalle, setDetalle] = useState(null)
 const {itemId} = useParams

  useEffect(() => {
    idProductos(itemId)
      .then(res => {
        setDetalle(res)
          })
      .catch (err => { console.log("err") })    

  }, [itemId])



  return (
    <div>
      <ItemDetail detalle= {detalle}/>
    </div>
  )
}

export default ItemDetailContainer