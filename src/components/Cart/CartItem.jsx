import { useCart } from "../../context/CartContex";

export const CartItem = ({item}) => {
    const {removeItem = useCart()}
    return (
        <Item {...item}>
            <button
            className="btn bg-delete primary"
            onClick={()=> removeItem(item.id)}
            >
             Eliminar
            </button>

        </Item>
    );
};