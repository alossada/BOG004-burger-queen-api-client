import Style from '../styles/waiter.module.css'
import { useCart } from 'react-use-cart';
const Menu = (props) => {
    // const onClick = () => {
    //     props.handleAddProduct({name: props.name, price: props.price, id: props.id, type: props.type});
    // }
    const { addItem } = useCart()
    
    return (
        <div className={Style.container_products} onClick={() => addItem(props.item)}>
            <img src={props.image} alt={props.name} />
            <div className={Style.container_image_name}>
                <p>{props.name}</p>
                <p style={{color:'#FE8D06', fontWeight:'700'}}>${props.price}</p>
            </div>
        </div>
    );
};

export default Menu;