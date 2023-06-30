
function CartWidget (props){
    return(
        <div>
            <div className="cart">
                <img src={props.image} alt="carrito" />
            </div>
            <div>
                <h3 className="number">1</h3>
            </div>
        </div>
    )
}

export default CartWidget