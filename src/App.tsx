import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { calculateTotals } from './features/cart/cartSlice';

import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
	const { cartItems } = useAppSelector(store => store.cart);
	const dispatch = useAppDispatch();

	useEffect(
		() => {
			dispatch(calculateTotals());
		},
		[cartItems]
	);

	return (
		<main>
			<Modal />
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
