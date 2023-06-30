
function CartWidget (props){
    return(
        <div>
            <div>
                <h3 className="number">1</h3>
            </div>
            <div >
                <img className="cart" src={props.image} alt="carrito" />
            </div>
            
        </div>
    )
}

export default CartWidget