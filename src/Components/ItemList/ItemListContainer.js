
import React,{useState, useEffect} from'react'
import { datosProductos, categoriaProductos } from '../products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'




function ItemListContainer(){

     const[productos,setProductos] = useState([])

    const{categoryId} = useParams()



useEffect(()=>{
  const asyncFunction = categoryId ? categoriaProductos : datosProductos

  asyncFunction(categoryId)
    .then((resp)=>{ 
        setProductos(resp) 
        })
    }, [categoryId])



    return(
        <>
        <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer