import { useCart } from "../../CartContext"

export const CartView = ()  => {
const {cart} = useCart()

return <section className="cart-container">
    <H1>Tu carrito de compras 🛒 </H1>
    {cart.length ?( <>
    <Cartlist/>
    <CartSummary/>
    </>) :(
        <>
        <p className="empty-cart">El carrito esta vacio 🤷‍♂️</p>
        <link to={"/"}className="btn primary bg-primary">
        Volver
        </link>
        </>
    
)}
     </section>

};
