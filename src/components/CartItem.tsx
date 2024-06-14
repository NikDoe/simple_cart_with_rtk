import { removeItem } from '../features/cart/cartSlice';
import { useAppDispatch } from '../hooks';
import { ChevronDown, ChevronUp } from '../icons';

type Props = {
    id: string;
    img: string;
    title: string;
    price: string;
    amount: number;
}

const CartItem = ({ id, img, title, price, amount }: Props) => {
	const dispatch = useAppDispatch();

	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button
					className='remove-btn'
					onClick={() => dispatch(removeItem(id))}
				>
                    remove
				</button>
			</div>
			<div>
				<button
					className='amount-btn'
					onClick={() => console.log('увеличить количество')}
				>
					<ChevronUp />
				</button>
				<p className='amount'>{amount}</p>
				<button
					className='amount-btn'
					onClick={() => console.log('уменьшить количество')}
				>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
};

export default CartItem;